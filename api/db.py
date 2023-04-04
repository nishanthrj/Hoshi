from decouple import config
from motor.motor_asyncio import AsyncIOMotorClient

URL = config("DB_URL")

client = AsyncIOMotorClient(URL)

database = client.hoshi
