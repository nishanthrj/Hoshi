import axios from "axios";

export const getSearchResults = (
	page: number,
	mediaType: string,
	filters: SearchFilters,
): Promise<SearchResults> =>
	axios
		.get(`https://api.hoshi.ga/${mediaType}`, { params: { page: page, ...filters } })
		.then((res) => res.data);

export const getMedia = async (mediaType: string, id: number): Promise<Anime | Manga> => {
	const type = mediaType !== "movie" ? mediaType : "anime";
	const res = await fetch(`https://api.hoshi.ga/${type}/${id}`, {
		next: { revalidate: 1 * 60 * 60 },
	});
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
};

export const getTopAnime = async (): Promise<Anime[]> => {
	const res = await fetch(`https://api.hoshi.ga/anime/top`, {
		next: { revalidate: 1 * 60 * 60 },
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	const data = await res.json();

	return data;
};

export const getPopularAnime = async (): Promise<Anime[]> => {
	const res = await fetch(`https://api.hoshi.ga/anime/popular`, {
		next: { revalidate: 1 * 60 * 60 },
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	const data = await res.json();

	return data;
};

export const getCurrentSeason = async (): Promise<Anime[]> => {
	const res = await fetch(`https://api.hoshi.ga/anime/this-season`, {
		next: { revalidate: 1 * 60 * 60 },
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	const data = await res.json();

	return data;
};

export const getNextSeason = async (): Promise<Anime[]> => {
	const res = await fetch(`https://api.hoshi.ga/anime/next-season`, {
		next: { revalidate: 1 * 60 * 60 },
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	const data = await res.json();

	return data;
};

export const getPopularManga = async (): Promise<Manga[]> => {
	const res = await fetch(`https://api.hoshi.ga/manga/popular`, {
		next: { revalidate: 1 * 60 * 60 },
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	const data = await res.json();

	return data;
};

export const getTopManga = async (): Promise<Manga[]> => {
	const res = await fetch(`https://api.hoshi.ga/manga/top`, {
		next: { revalidate: 1 * 60 * 60 },
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	const data = await res.json();

	return data;
};

export const getTopManhwa = async (): Promise<Anime[]> => {
	const res = await fetch(`https://api.hoshi.ga/manga/top-manhwa`, {
		next: { revalidate: 1 * 60 * 60 },
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	const data = await res.json();

	return data;
};

export const getTrendingMedia = async (): Promise<TrendingData> => {
	const animeRes = await fetch(`https://api.hoshi.ga/anime/trending`, {
		next: { revalidate: 20 * 60 },
	});
	const mangaRes = await fetch(`https://api.hoshi.ga/manga/trending`, {
		next: { revalidate: 20 * 60 },
	});

	if (!animeRes.ok || !mangaRes.ok) {
		throw new Error("Failed to fetch data");
	}

	const data = {
		anime: await animeRes.json(),
		manga: await mangaRes.json(),
	};

	return data;
};

export const getMediaFromRelation = async (
	mediaType: string,
	ext: string,
	id: number,
): Promise<Anime | Manga> => {
	const type = mediaType !== "movie" ? mediaType : "anime";
	const res = await fetch(`https://api.hoshi.ga/${type}/external?ext=${ext}&id=${id}`, {
		next: { revalidate: 1 * 60 * 60 },
	});
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
};

export const getRelatedMedia = async (
	mediaType: string,
	kitsuId: number,
): Promise<RelatedMedia[]> => {
	const type = mediaType !== "movie" ? mediaType : "anime";
	const res = await fetch(`https://api.hoshi.ga/${type}/relation?kitsuId=${kitsuId}`, {
		next: { revalidate: 6 * 60 * 60 },
	});
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
};

export const getCharacters = async (mediaType: string, malId: number): Promise<Character[]> => {
	const type = mediaType !== "movie" ? mediaType : "anime";
	const res = await fetch(`https://api.hoshi.ga/${type}/characters?malId=${malId}`, {
		next: { revalidate: 6 * 60 * 60 },
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	const data = await res.json();

	return data;
};

export const getTrailer = async (mediaType: string, malId: number): Promise<Trailer> => {
	const type = mediaType !== "movie" ? mediaType : "anime";
	const res = await fetch(`https://api.hoshi.ga/${type}/trailer?malId=${malId}`, {
		next: { revalidate: 6 * 60 * 60 },
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	const data = await res.json();

	return data;
};

export const getStats = async (
	mediaType: string,
	malId: number,
): Promise<AnimeStats | MangaStats> => {
	const type = mediaType !== "movie" ? mediaType : "anime";
	const res = await fetch(`https://api.hoshi.ga/${type}/stats?malId=${malId}`, {
		next: { revalidate: 20 * 60 },
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	const json = await res.json();

	return json.data;
};

export const getStaff = async (malId: number): Promise<Staff[]> => {
	const res = await fetch(`https://api.hoshi.ga/anime/staff?malId=${malId}`, {
		next: { revalidate: 6 * 60 * 60 },
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	const json = await res.json();

	return json.data;
};

export const getEpisodes = (offset: number, kitsuId: number): Promise<Episodes> =>
	axios
		.get(`https://api.hoshi.ga/anime/episodes`, {
			params: { kitsuId: kitsuId, offset: offset },
		})
		.then((res) => res.data);
