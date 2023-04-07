import math
from datetime import datetime


def regular_clause(query, path):
    return {"text": {"query": query, "path": path}}


def title_clause(qtype, query, boost, extra=None):
    clause = {
        qtype: {
            "query": query,
            "path": ["title", "en", "enjp", "jp"],
            "score": {"boost": {"value": boost}},
        }
    }
    if extra:
        clause[qtype][extra[0]] = extra[1]

    return clause


def build_pipeline(
    media_type,
    q=None,
    subtype=None,
    status=None,
    season=None,
    year=None,
    genres=None,
    tags=None,
    exclude_genres=None,
    exclude_tags=None,
    sort_by="score",
    page=1,
):

    pipeline = [
        {
            "$search": {
                "index": "animesearch" if media_type == "anime" else "mangasearch",
                "compound": {"must": []},
                "returnStoredSource": True,
            }
        },
        {
            "$facet": {
                "pagination": [
                    {"$count": "total"},
                    {
                        "$addFields": {
                            "lastPage": {
                                "$toInt": {"$floor": {"$divide": ["$total", 20]}}
                            },
                            "currentPage": page if page else 1,
                        }
                    },
                ],
                "data": [
                    {"$sort": {f"{sort_by}": 1 if sort_by == "title" else -1}},
                    {"$skip": 20 * page - 1 if page > 1 else 0},
                    {"$limit": 20},
                ],
            }
        },
        {"$project": {"data": 1, "pagination": {"$arrayElemAt": ["$pagination", 0]}}},
    ]

    if not any(
        [q, subtype, status, season, year, genres, tags, exclude_genres, exclude_tags]
    ):
        pipeline.pop(0)

    else:
        if q:
            should_clause = {"compound": {"should": []}}

            text = title_clause("text", q, 1000)
            wildcard = title_clause(
                "wildcard", f"*{q}*", 100, ("allowAnalyzedField", True)
            )
            fuzzy = title_clause("text", q, 10, ("fuzzy", {}))

            should_clause["compound"]["should"] = [text, wildcard, fuzzy]
            pipeline[0]["$search"]["compound"]["must"].append(should_clause)
            pipeline[1]["$facet"]["data"].pop(0)

        if any([year, season, genres, tags, subtype, status]):
            filter_clause = {"compound": {"filter": []}}

            if year:
                filter_clause["compound"]["filter"].append(
                    regular_clause(year, "startDate")
                )

            if season:
                filter_clause["compound"]["filter"].append(
                    {"phrase": {"path": "season", "query": season}}
                )

            if genres:
                for g in genres.split(","):
                    filter_clause["compound"]["filter"].append(
                        regular_clause(g, "genres")
                    )

            if tags:
                for t in tags.split(","):
                    filter_clause["compound"]["filter"].append(
                        regular_clause(t, "tags")
                    )

            if subtype:
                filter_clause["compound"]["filter"].append(
                    regular_clause(subtype, "type")
                )

            if status:
                filter_clause["compound"]["filter"].append(
                    regular_clause(status, "status")
                )

            pipeline[0]["$search"]["compound"]["must"].append(filter_clause)

        if any([exclude_genres, exclude_tags]):
            mustNot_clause = {"compound": {"mustNot": []}}

            if exclude_genres:
                for xg in exclude_genres.split(","):
                    mustNot_clause["compound"]["mustNot"].append(
                        regular_clause(xg, "genres")
                    )

            if exclude_tags:
                for xt in exclude_tags.split(","):
                    mustNot_clause["compound"]["mustNot"].append(
                        regular_clause(xt, "tags")
                    )

            pipeline[0]["$search"]["compound"]["must"].append(mustNot_clause)

    return pipeline


def season_pipeline(season: str):
    x = 0 if season == "current" else 1
    seasons = ["Winter", "Spring", "Summer", "Fall"]
    this_season = f"{seasons[math.floor((int(datetime.today().month) - 1) / 3) + x]} {datetime.today().year}"
    pipeline = [
        {
            "$search": {
                "index": "animesearch",
                "compound": {
                    "must": [
                        {
                            "phrase": {
                                "path": "season",
                                "query": this_season,
                            },
                        },
                    ],
                },
                "returnStoredSource": True,
            },
        },
        {"$sort": {"popularity": -1}},
    ]

    return pipeline


trending_query = """query($type: MediaType) {
      Page(page: 1, perPage: 10) {
        media(type: $type, isAdult: false, sort: TRENDING_DESC) {
          id
          idMal
          title {
            english
            romaji
          }
          format
          genres
          popularity
          description
          coverImage {
            extraLarge
          }
          averageScore
        }
      }
    }"""
