def build_pipeline(media_type, q=None, subtype=None, status=None,
                   season=None, genres=None, tags=None, excluded_genres=None,
                   excluded_tags=None, sort_by='score', sort_order='desc', page=None):

    type_clause = {
        'text': {
            'query': subtype,
            'path': 'type'
        }
    }

    status_clause = {
        'text': {
            'query': status,
            'path': 'status'
        }
    }

    season_clause = {
        'text': {
            'query': season,
            'path': 'status'
        }
    }

    genres_clause = {
        'text': {
            'query': genres.split(',') if genres else '',
            'path': 'genres'
        }
    }

    tags_clause = {
        'text': {
            'query': tags.split(',') if tags else '',
            'path': 'tags'
        }
    }

    exclude_genres_clause = {
        'text': {
            'query': excluded_genres.split(',') if excluded_genres else '',
            'path': 'genres'
        }
    }

    exclude_tags_clause = {
        'text': {
            'query': excluded_tags.split(',') if excluded_tags else '',
            'path': 'tags'
        }
    }

    full_text_clause = {
        'text': {
            'query': q,
            'path': ['title', 'en', 'enjp', 'jp'],
            'score': {'boost': {'value': 1000}}
        }
    }

    wildcard_text_clause = {
        'wildcard': {
            'query': f'*{q}*',
            'path': ['title', 'en', 'enjp', 'jp'],
            'score': {'boost': {'value': 100}},
            'allowAnalyzedField': True
        }
    }

    fuzzy_text_clause = {
        'text': {
            'query': q,
            'path': ['title', 'en', 'enjp', 'jp'],
            'score': {'boost': {'value': 10}},
            'fuzzy': {}
        }
    }


    pipeline = [
        {
            '$search': {
                'index': 'animesearch' if media_type == 'anime' else 'mangasearch',
                'compound': {
                    'filter': [],
                    'mustNot': [],
                    'should': [],
                },
                'returnStoredSource': True
            }
        },
        {
            '$facet': {
                'pagination': [
                    {'$count': 'total'},
                    {
                        '$addFields': {
                            'lastPage': {'$toInt': {'$ceil': {'$divide': ['$total', 20]}}},
                            'currentPage': page if page else 1
                        }
                    }
                ],
                'data': [
                    {'$sort': {f'{sort_by}': 1 if sort_order == 'asc' else -1}},
                    {'$skip': 20 * page if page else 0},
                    {'$limit': 20},
                ]
            }
        },
        {
            '$project': {
                'data': 1,
                'pagination': {'$arrayElemAt': ['$pagination', 0]}
            }
        }
    ]

    if not any([q, subtype, status, season, genres, tags, excluded_genres, excluded_tags]):
        pipeline.pop(0)
    else:
        if q:
            pipeline[0]['$search']['compound']['should'] = [full_text_clause, wildcard_text_clause, fuzzy_text_clause]
            pipeline[1]['$facet']['data'].pop(0)

        if subtype:
            pipeline[0]['$search']['compound']['filter'].append(type_clause)

        if status:
            pipeline[0]['$search']['compound']['filter'].append(status_clause)

        if season:
            pipeline[0]['$search']['compound']['filter'].append(season_clause)

        if genres:
            pipeline[0]['$search']['compound']['filter'].append(genres_clause)

        if tags:
            pipeline[0]['$search']['compound']['filter'].append(tags_clause)

        if excluded_genres:
            pipeline[0]['$search']['compound']['mustNot'].append(exclude_genres_clause)

        if excluded_tags:
            pipeline[0]['$search']['compound']['mustNot'].append(exclude_tags_clause)

    return pipeline
