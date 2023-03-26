from fastapi import APIRouter, Path, Query
from fastapi.responses import JSONResponse
from models.manga import Manga, SearchResults
from db import database
from utils import build_pipeline

manga = APIRouter()

collection = database.get_collection('manga')


@manga.get('/manga', response_model=SearchResults, response_model_by_alias=False, tags=["Manga"])
async def search_manga(q: str | None = None, subtype: str | None = None, status: str | None = None,
                 year: str | None = None, genres: str | None = None, tags: str | None = None, 
                 exclude_genres: str | None = None, exclude_tags: str | None = None, 
                 sort_by: str = 'score', page: int = 1):
    
    params = locals()
    params['media_type'] = 'manga'
    
    result = await collection.aggregate(build_pipeline(**params)).to_list(None)
    
    return JSONResponse(content=result[0])


@manga.get('/manga/{id}', response_model=Manga, response_model_by_alias=False, tags=["Manga"])
async def get_manga(id: int):
    return await collection.find_one({"_id":id})

@manga.get('/manga/relation/{kitsuId}', response_model=Manga, response_model_by_alias=False, tags=['Manga'])
async def get_manga_by_relation(id: int):
    result = await collection.find_one({"kitsuId": id})
    return JSONResponse(content=result)
    