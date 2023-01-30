from fastapi import APIRouter

from models.anime import Anime
from db import database

anime = APIRouter()

collection = database.get_collection('anime')

@anime.get('/anime/{id}', response_model=Anime, response_model_by_alias=False)
async def get_anime(id: int):
    return await collection.find_one({"_id":id})


  