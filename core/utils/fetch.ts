import axios from "axios";

export const getSearchResults = (page: number, mediaType: string, filters: any) =>
	axios
		.get(`http://127.0.0.1:8000/${mediaType}`, { params: { page: page, ...filters } })
		.then((res) => res.data);

export const getAnime = async (id: number) => {
	const res = await fetch(`http://127.0.0.1:8000/anime/${id}`, { next: { revalidate: 20 * 60 } });
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
};

export const getAnimeFromRelation = async (kitsuId: number) => {
	const res = await fetch(`http://127.0.0.1:8000/anime/relation/${kitsuId}`, {
		cache: "no-cache",
	});
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
};

export const getRelatedAnime = async (kitsuId: number) => {
	const res = await fetch(`http://127.0.0.1:8000/anime/${kitsuId}/relation`, {
		cache: "no-cache",
	});
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
};

export const getCharacters = async (malId: number) => {
	const res = await fetch(`http://127.0.0.1:8000/anime/${malId}/characters`, {
		cache: "no-cache",
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	const data = await res.json();

	return data;
};

export const getTrailer = async (malId: number) => {
	const res = await fetch(`http://127.0.0.1:8000/anime/${malId}/trailer`, {
		cache: "no-cache",
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	const data = await res.json();

	return data;
};

export const getStats = async (malId: number) => {
	const res = await fetch(`http://127.0.0.1:8000/anime/${malId}/stats`, {
		cache: "no-cache",
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	const json = await res.json();

	return json.data;
};

export const getStaff = async (malId: number) => {
	const res = await fetch(`http://127.0.0.1:8000/anime/${malId}/staff`, {
		cache: "no-cache",
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	const json = await res.json();

	return json.data;
};

export const getEpisodes = (offset: number, kitsuId: number) =>
	axios
		.get(`http://127.0.0.1:8000/anime/${kitsuId}/episodes`, { params: { offset: offset } })
		.then((res) => res.data);
