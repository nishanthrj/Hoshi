from fastapi import FastAPI
from models.root import Root
from routers.anime import anime
from routers.manga import manga


app = FastAPI()


@app.get('/', response_model=Root, include_in_schema=False)
async def root():
    data = {
		'version': '0.1.0',
		'website': 'https://hoshi.ga',
		'author': 'https://github.com/nishanthrj',
		'documentation': 'https://api.hoshi.ga/redoc',
		'github': 'https://github.com/nishanthrj/Hoshi',
	}
    return data

app.include_router(anime)
app.include_router(manga)

