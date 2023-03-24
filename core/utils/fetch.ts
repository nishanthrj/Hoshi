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
