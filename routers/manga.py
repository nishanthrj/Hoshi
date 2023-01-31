from fastapi import APIRouter
from fastapi.responses import JSONResponse
from models.manga import Manga
from db import database

manga = APIRouter()

collection = database.get_collection('manga')

@manga.get('/manga/{id}', response_model=Manga, response_model_by_alias=False)
async def get_manga(id: int):
    result = await collection.find_one({"_id": id})
    return JSONResponse(content=result)
    