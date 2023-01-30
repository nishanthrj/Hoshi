from pydantic import BaseModel, Field
from datetime import datetime

class Recommendation(BaseModel):
    id: int
    title: str
    slug: str
    poster: str | None
    
class Anime(BaseModel):
    id: int = Field(..., alias='_id')
    malId: int
    kitsuId: int
    title: str
    en: str | None
    enjp: str | None
    jp: str | None
    slug: str | None
    poster: str | None
    type: str | None
    synopsis: str | None
    status: str | None
    genres: list[str] | None
    tags: list[str] | None
    season: str | None
    startDate: datetime | None
    endDate: datetime | None
    rating: str | None
    episodeCount: int | None
    studio: list[str] | None
    score: float | None
    popularity: int | None
    likes: int | None
    recommended: list[Recommendation] | None
    


