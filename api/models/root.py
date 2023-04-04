from pydantic import BaseModel


class Root(BaseModel):
    version: str
    website: str
    author: str
    documentation: str
    github: str
