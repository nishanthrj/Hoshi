import pandas as pd

from sklearn.metrics.pairwise import cosine_similarity
from sentence_transformers import SentenceTransformer

from thefuzz import process, fuzz
from decouple import config
from pymongo import MongoClient

pd.set_option('mode.chained_assignment', None)


model_name = "sentence-transformers/paraphrase-mpnet-base-v2"

client = MongoClient(config('DB_URL'))
database = client.hoshi


def save(media_id: int, data: list[dict], media_type: str) -> None:
    if media_type == "anime":
        collection = database.anime
    else:
        collection = database.manga
    
    select = {"_id": media_id}
    value = {
        '$set': {
            'recommended': data
            },
    }
    collection.update_one(select, value)
    

def recommend(media_format: str, media_type: str) -> None:
    main_df = pd.read_json(f'./extras/dataset/{media_type}.json')

    if media_format != "OVA":
        df = main_df[main_df['type'] == media_format]
    else:
        df = main_df[(main_df['type'] == 'OVA') | (main_df['type'] == 'Special')]
    
   
    df['tempId'] = range(len(df))
    
    df['genres'] = df['genres'].apply(lambda x: sorted(x) if x else [])
    df['tags'] = df['tags'].apply(lambda x: sorted(x) if x else [])
    df['synopsis'] = df['synopsis'].fillna('')
    df['synopsis'] = df['synopsis'].str.lower()
    
    df['synopsis'] = df['synopsis'].apply(lambda x: f"Synopsis: {x}".replace('\n', '') if x else '')
    df['genres'] = df['genres'].apply(lambda x: f"Genres: {', '.join(x)}." if x else '')
    df['tags'] = df['tags'].apply(lambda x: f"Tags: {', '.join(x)}." if x else '')

    df['soup'] = df['tags'] + '\n' + df['synopsis'] + '\n' + df['genres']
    df['soup'] = df['soup'].apply(lambda x: x.lower())
    
    
    model = SentenceTransformer(model_name)
    
    vecs = model.encode(df['soup'].to_list())
    
    cosine_sim = cosine_similarity(vecs, vecs)
    
    
    indices = pd.Series(df['tempId'].to_list(), index=df['_id'])
    
    for media_id in df['_id']:
        idx = indices[media_id]
        sim_score = list(enumerate(cosine_sim[idx]))
        sim_score = sorted(sim_score, key=lambda x: x[1], reverse=True)
        sim_score = sim_score[1:100]
        media_indices = [i[0] for i in sim_score]
    
        recdf = df.iloc[media_indices]
    
        recdf = recdf[(recdf['score'] >= 65) &
                    (recdf['popularity'] >= recdf['popularity'].median()) &
                    (recdf['status'] != "Not Yet Aired") & 
                    (recdf['status'] != "Not Yet Published") & 
                    (recdf['status'] != "Cancelled")]

        title = df[df['_id'] == media_id].title.values[0]
        unique_idx = []
        unique = [title]

        for row in recdf.itertuples():
            match = process.extractOne(row.title, unique, scorer=fuzz.partial_ratio, score_cutoff=90)
            if match is None:
                unique.append(row.title)
                unique_idx.append(row.Index)

        recdf = recdf[recdf.index.isin(unique_idx)][:18]
        
        results = recdf[['_id','title','slug','poster']]
        
        save(media_id, results.apply(lambda x: x.to_dict(), axis=1).tolist(), media_type) 
        
        print(f"{media_format} {media_id} added.")
        


def main() -> None:
    anime_formats = ['TV', 'Movie', 'OVA', 'ONA']
    manga_formats = ['Manga', 'Manhwa', 'Manhua', 'Oneshot', 'Doujin', 'Light Novel', 'OEL']
    
    
    for x in anime_formats:
        recommend(x,'anime')
        
    for x in manga_formats:
        recommend(x,'manga')

if __name__ == '__main__':
    main()
