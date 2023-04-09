from fastapi import APIRouter, Path, Query
from fastapi.responses import JSONResponse
from models.manga import Manga, SearchResults
from db import database
from utils import build_pipeline, trending_query
from aiohttp_retry import RetryClient, ExponentialRetry


manga = APIRouter()

collection = database.get_collection("manga")

retry_options = ExponentialRetry(
    attempts=5, start_timeout=1, factor=2.0, statuses={429, 500}
)
client = RetryClient(raise_for_status=False, retry_options=retry_options)


@manga.get(
    "/manga",
    response_model=SearchResults,
    response_model_by_alias=False,
    tags=["Manga"],
)
async def search_manga(
    q: str | None = None,
    subtype: str | None = None,
    status: str | None = None,
    year: str | None = None,
    genres: str | None = None,
    tags: str | None = None,
    exclude_genres: str | None = None,
    exclude_tags: str | None = None,
    sort_by: str = "score",
    page: int = 1,
):
    params = locals()
    params["media_type"] = "manga"

    result = await collection.aggregate(build_pipeline(**params)).to_list(None)

    return JSONResponse(content=result[0])


@manga.get(
    "/manga/popular",
    response_model=SearchResults,
    response_model_by_alias=False,
    tags=["Manga"],
)
async def get_popular_manga():
    pipeline = [{"$sort": {"popularity": -1}}, {"$limit": 100}]

    result = await collection.aggregate(pipeline).to_list(None)

    return JSONResponse(content=result)


@manga.get(
    "/manga/top",
    response_model=SearchResults,
    response_model_by_alias=False,
    tags=["Manga"],
)
async def get_top_manga():
    pipeline = [{"$sort": {"score": -1}}, {"$limit": 100}]

    result = await collection.aggregate(pipeline).to_list(None)

    return JSONResponse(content=result)


@manga.get(
    "/manga/trending",
    tags=["Manga"],
)
async def get_trending_manga():
    res = await client.post(
        "https://graphql.anilist.co",
        json={"query": trending_query, "variables": {"type": "MANGA"}},
    )

    data = await res.json()
    data = data["data"]["Page"]["media"]

    return JSONResponse(content=data)


@manga.get(
    "/manga/top-manhwa",
    response_model=SearchResults,
    response_model_by_alias=False,
    tags=["Manga"],
)
async def get_top_manhwa():
    pipeline = [
        {
            "$search": {
                "index": "mangasearch",
                "compound": {
                    "must": [
                        {
                            "phrase": {
                                "path": "type",
                                "query": "Manhwa",
                            },
                        },
                    ],
                },
                "returnStoredSource": True,
            },
        },
        {"$sort": {"score": -1}},
        {"$limit": 100},
    ]

    result = await collection.aggregate(pipeline).to_list(None)

    return JSONResponse(content=result)


@manga.get("/manga/external", include_in_schema=False)
async def get_external_manga(ext: str, id: int):
    if ext == "mal":
        result = await collection.find_one({"malId": id})
    else:
        result = await collection.find_one({"kitsuId": id})
    return JSONResponse(content=result)


@manga.get("/manga/relation", tags=["Manga"])
async def get_manga_relation(kitsuId: int):
    res = await client.get(
        f"https://kitsu.io/api/edge/manga/{kitsuId}?include=mediaRelationships.destination"
    )
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
                "status": entry["attributes"].get("status"),
            }
            results.append(result)
            continue

        if entry["type"] == "mediaRelationships":
            rel = {
                "id": entry["relationships"]["destination"]["data"]["id"],
                "role": entry["attributes"].get("role", "").replace("_", " "),
            }
            relationship.append(rel)

    for i, x in enumerate(results):
        for rel_dict in relationship:
            if rel_dict["id"] == x["id"]:
                results[i]["relation"] = rel_dict.get("role", None)
                break
        else:
            results[i]["relation"] = None

    results = results[::-1]

    return JSONResponse(content=results)


@manga.get("/manga/characters", tags=["Manga"])
async def get_manga_characters(malId: int):
    res = await client.get(f"https://api.jikan.moe/v4/manga/{malId}/characters")
    data = await res.json()
    data = data.get("data")
    return JSONResponse(content=data)


@manga.get("/manga/trailer", tags=["Manga"])
async def get_manga_trailer(malId: int):
    res = await client.get(f"https://api.jikan.moe/v4/manga/{malId}/videos")
    data = await res.json()
    data = data.get("data", {}).get("promo")
    if data:
        for promo in data:
            if "PV" in promo["title"] and "Character" not in promo["title"]:
                return JSONResponse(content=promo)

    return JSONResponse(content=data[0] if data else None)


@manga.get("/manga/stats", tags=["Manga"])
async def get_manga_stats(malId: int):
    res = await client.get(f"https://api.jikan.moe/v4/manga/{malId}/statistics")
    data = await res.json()
    return JSONResponse(content=data)


@manga.get(
    "/manga/{id}", response_model=Manga, response_model_by_alias=False, tags=["Manga"]
)
async def get_manga(id: int):
    result = await collection.find_one({"_id": id})
    return JSONResponse(content=result)
