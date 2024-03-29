from fastapi import FastAPI
from models.root import Root
from routers.anime import anime
from routers.manga import manga
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware

description = """
Website: https://hoshi-beta.vercel.app	|	URL: https://hoshiapi.up.railway.app	|	License: [GPL-3.0](https://github.com/nishanthrj/Hoshi/blob/master/LICENSE)

A simple REST API used in Hoshi.
"""
app = FastAPI(
    title="Hoshi API",
    version="1.0.0",
    description=description,
    redoc_url="/docs",
    docs_url=None,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://hoshi-beta.vercel.app",
        "https://hoshiapi.up.railway.app",
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/", response_model=Root, include_in_schema=False)
async def root():
    data = {
        "version": "1.0.0",
        "website": "https://hoshi-beta.vercel.app",
        "author": "https://github.com/nishanthrj",
        "documentation": "https://hoshiapi.up.railway.app/docs",
        "github": "https://github.com/nishanthrj/Hoshi",
    }
    return data


app.include_router(anime)
app.include_router(manga)
