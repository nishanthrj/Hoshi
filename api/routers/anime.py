from fastapi import APIRouter
from models.anime import Anime, SearchResults
from db import database
from utils import build_pipeline
from fastapi.responses import JSONResponse

anime = APIRouter()

collection = database.get_collection('anime')


@anime.get('/anime', response_model=SearchResults, response_model_by_alias=False, tags=['Anime'])
async def search_anime(q: str | None = None, subtype: str | None = None, status: str | None = None,
                 season: str | None = None, year: str | None = None, genres: str | None = None, tags: str | None = None, 
                 exclude_genres: str | None = None, exclude_tags: str | None = None, 
                 sort_by: str = 'score', sort_order: str = 'desc', page: int = 1):
    
    params = locals()
    params['media_type'] = 'anime'

    result = await collection.aggregate(build_pipeline(**params)).to_list(None)
    
    return JSONResponse(content=result)


@anime.get('/anime/{id}', response_model=Anime, response_model_by_alias=False, tags=['Anime'])
async def get_anime(id: int):
    result = await collection.find_one({"_id": id})
    return JSONResponse(content=result)
