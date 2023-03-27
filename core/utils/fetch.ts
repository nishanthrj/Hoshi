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

export const getRelatedAnime = async (kitsuId: number) => {
	const results: any = [];
	const relationship: any = [];

	const res = await fetch(
		`https://kitsu.io/api/edge/anime/${kitsuId}?include=mediaRelationships.destination`,
		{ next: { revalidate: 2 * 60 * 60 } },
	);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	const data = await res.json();

	data.included.forEach((entry: any) => {
		if (entry.type === "anime" || entry.type === "manga") {
			results.push({
				id: entry.id,
				type: entry.type,
				poster: entry.attributes.posterImage.original,
				title: entry.attributes.canonicalTitle,
				format: entry.attributes.subtype,
				status: entry.attributes.status,
			});
			return;
		}

		if (entry.type === "mediaRelationships") {
			relationship.push({
				id: entry.relationships.destination.data.id,
				role: entry.attributes.role.replace("_", " "),
			});
		}
	});

	results.forEach((x: any, i: any) => {
		results[i].relation = relationship.find((r: any) => r.id === x.id).role;
	});

	return results.reverse();
};

export const getAnimeFromRelation = async (kitsuId: number) => {
	const res = await fetch(`http://127.0.0.1:8000/anime/relation/${kitsuId}`, {
		next: { revalidate: 2 * 60 * 60 },
	});
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
};

export const getCharacters = async (malId: number) => {
	const res = await fetch(`https://api.jikan.moe/v4/anime/${malId}/characters`, {
		next: { revalidate: 2 * 60 * 60 },
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	const json = await res.json();
	const data = json.data.sort((a: any, b: any) => b.favorites - a.favorites);

	return data;
};

export const getTrailer = async (malId: number) => {
	const res = await fetch(`https://api.jikan.moe/v4/anime/${malId}/videos`, {
		next: { revalidate: 2 * 60 * 60 },
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	const json = await res.json();
	const data = json.data.promo;

	for (const promo of data) {
		if (promo.title.includes("PV") && !promo.title.includes("Character")) return promo;
	}

	return data?.[0];
};

export const getStats = async (malId: number) => {
	const res = await fetch(`https://api.jikan.moe/v4/anime/${malId}/statistics`, {
		next: { revalidate: 20 * 60 },
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	const json = await res.json();

	return json.data;
};

export const getStaff = async (malId: number) => {
	const res = await fetch(`https://api.jikan.moe/v4/anime/${malId}/staff`, {
		next: { revalidate: 2 * 60 * 60 },
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	const json = await res.json();

	return json.data;
};
