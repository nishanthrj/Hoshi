from fastapi import APIRouter
from models.anime import Anime
from db import database
from fastapi.responses import JSONResponse

anime = APIRouter()

collection = database.get_collection('anime')

@anime.get('/anime/{id}', response_model=Anime, response_model_by_alias=False)
async def get_anime(id: int):
    result = await collection.find_one({"_id": id})
    return JSONResponse(content=result)
