import axios from "axios";

export const getSearchResults = (page: number, mediaType: string, filters: any) =>
	axios
		.get(`http://127.0.0.1:8000/${mediaType}`, { params: { page: page, ...filters } })
		.then((res) => res.data);

export const getMedia = async (mediaType: string, id: number) => {
	const type = mediaType !== "movie" ? mediaType : "anime";
	const res = await fetch(`http://127.0.0.1:8000/${type}/${id}`, {
		next: { revalidate: 20 * 60 },
	});
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
};

export const getMediaFromRelation = async (mediaType: string, kitsuId: number) => {
	const type = mediaType !== "movie" ? mediaType : "anime";
	const res = await fetch(`http://127.0.0.1:8000/${type}/external?kitsuId=${kitsuId}`, {
		cache: "no-cache",
	});
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
};

export const getRelatedMedia = async (mediaType: string, kitsuId: number) => {
	const type = mediaType !== "movie" ? mediaType : "anime";
	const res = await fetch(`http://127.0.0.1:8000/${type}/relation?kitsuId=${kitsuId}`, {
		cache: "no-cache",
	});
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
};

export const getCharacters = async (mediaType: string, malId: number) => {
	const type = mediaType !== "movie" ? mediaType : "anime";
	const res = await fetch(`http://127.0.0.1:8000/${type}/characters?malId=${malId}`, {
		cache: "no-cache",
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	const data = await res.json();

	return data;
};

export const getTrailer = async (mediaType: string, malId: number) => {
	const type = mediaType !== "movie" ? mediaType : "anime";
	const res = await fetch(`http://127.0.0.1:8000/${type}/trailer?malId=${malId}`, {
		cache: "no-cache",
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	const data = await res.json();

	return data;
};

export const getStats = async (mediaType: string, malId: number) => {
	const type = mediaType !== "movie" ? mediaType : "anime";
	const res = await fetch(`http://127.0.0.1:8000/${type}/stats?malId=${malId}`, {
		cache: "no-cache",
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	const json = await res.json();

	return json.data;
};

export const getStaff = async (malId: number) => {
	const res = await fetch(`http://127.0.0.1:8000/anime/staff?malId=${malId}`, {
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
		.get(`http://127.0.0.1:8000/anime/episodes`, {
			params: { kitsuId: kitsuId, offset: offset },
		})
		.then((res) => res.data);
