from fastapi import APIRouter

from models.manga import Manga
from db import database

manga = APIRouter()

collection = database.get_collection('manga')

@manga.get('/manga/{id}', response_model=Manga)
async def get_manga(id: int):
    return await collection.find_one({"_id":id})
    