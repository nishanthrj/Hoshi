import axios from "axios";

export const getSearchResults = (page: number, mediaType: string, filters: any) =>
	axios
		.get(`http://127.0.0.1:8000/${mediaType}`, { params: { page: page, ...filters } })
		.then((res) => res.data);
