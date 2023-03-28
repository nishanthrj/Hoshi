from fastapi import APIRouter
from models.anime import Anime, SearchResults
from db import database
from utils import build_pipeline
from fastapi.responses import JSONResponse
from aiohttp_retry import RetryClient, ExponentialRetry


anime = APIRouter()

collection = database.get_collection('anime')

retry_options = ExponentialRetry(attempts=3, start_timeout=1, factor=2.0, statuses={429, 500})
client = RetryClient(raise_for_status=False, retry_options=retry_options)


@anime.get('/anime', response_model=SearchResults, response_model_by_alias=False, tags=['Anime'])
async def search_anime(q: str | None = None, subtype: str | None = None, status: str | None = None,
                 season: str | None = None, year: str | None = None, genres: str | None = None, tags: str | None = None, 
                 exclude_genres: str | None = None, exclude_tags: str | None = None, 
                 sort_by: str = 'score', page: int = 1):
    
    params = locals()
    params['media_type'] = 'anime'

    result = await collection.aggregate(build_pipeline(**params)).to_list(None)
    
    return JSONResponse(content=result[0])


@anime.get('/anime/{id}', response_model=Anime, response_model_by_alias=False, tags=['Anime'])
async def get_anime(id: int):
    result = await collection.find_one({"_id": id})
    return JSONResponse(content=result)


@anime.get('/anime/relation/{kitsuId}', response_model=Anime, response_model_by_alias=False, tags=['Anime'])
async def get_anime_by_relation(kitsuId: int):
    result = await collection.find_one({"kitsuId": kitsuId})
    return JSONResponse(content=result)


@anime.get('/anime/{kitsuId}/relation')
async def get_anime_characters(kitsuId: int):
    res = await client.get(f"https://kitsu.io/api/edge/anime/{kitsuId}?include=mediaRelationships.destination")
    data = await res.json()
    
    results = []
    relationship = []
    
    for entry in data["included"]:
        if entry["type"] == "anime" or entry["type"] == "manga":
            result = {
                "id": entry["id"],
                "type": entry["type"],
                "poster": entry["attributes"].get("posterImage", {}).get("original"),
                "title": entry["attributes"].get("canonicalTitle"),
                "format": entry["attributes"].get("subtype"),
                "status": entry["attributes"].get("status")
            }
            results.append(result)
            continue

        if entry["type"] == "mediaRelationships":
            rel = {
                "id": entry["relationships"]["destination"]["data"]["id"],
                "role": entry["attributes"].get("role", "").replace("_", " ")
            }
            relationship.append(rel)

    for i, x in enumerate(results):
        for rel_dict in relationship:
            if rel_dict["id"] == x["id"]:
                results[i]["relation"] = rel_dict.get("role", None)
                break
        else:
            results[i]["relation"] = None
       
    return JSONResponse(content=results)


@anime.get('/anime/{malId}/characters')
async def get_anime_characters(malId: int):
    res = await client.get(f"https://api.jikan.moe/v4/anime/{malId}/characters")
    data = await res.json()
    if data.get('data'):
        data = sorted(data['data'], key=lambda x: x['favorites'], reverse=True);
    return JSONResponse(content=data)


@anime.get('/anime/{malId}/trailer')
async def get_anime_trailer(malId: int):
    res = await client.get(f"https://api.jikan.moe/v4/anime/{malId}/videos")
    data = await res.json()
    for promo in data.get('data').get('promo'):
        if "PV" in promo['title'] and "Character" not in promo['title']:
            return JSONResponse(content=promo)

    return JSONResponse(content=data.get('data').get('promo')[0] if data.get('data') else None)


@anime.get('/anime/{malId}/stats')
async def get_anime_stats(malId: int):
    res = await client.get(f"https://api.jikan.moe/v4/anime/{malId}/statistics")
    data = await res.json()
    return JSONResponse(content=data)


@anime.get('/anime/{malId}/staff')
async def get_anime_staff(malId: int):
    res = await client.get(f"https://api.jikan.moe/v4/anime/{malId}/staff")
    data = await res.json()
    return JSONResponse(content=data)

@anime.get('/anime/{kitsuId}/episodes')
async def get_anime_episode(kitsuId: int, offset: int = 0):
    res = await client.get(f"https://kitsu.io/api/edge/episodes?filter[mediaId]={kitsuId}&page[limit]=20&page[offset]={offset}&sort=number")
    data = await res.json()
    return JSONResponse(content=data)
