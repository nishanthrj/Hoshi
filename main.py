from fastapi import FastAPI


app = FastAPI()


@app.get('/')
async def root():
    data = {
		'version': '0.1.0',
		'website': 'https://hoshi.ga',
		'author': 'https://github.com/nishanthrj',
		'documentation': 'https://api.hoshi.ga/redoc',
		'github': 'https://github.com/nishanthrj/Hoshi',
	}
    return data
