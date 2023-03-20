import { create } from "zustand";
import { deleteFromSet } from "../utils/store";

interface SearchStoreState {
	mediaType: string;
	q: string;
	genres: Set<string>;
	excludedGenres: Set<string>;
	tags: Set<string>;
	excludedTags: Set<string>;
	format: string;
	status: string;
	release: string;
	sort: string;
}

interface SearchStoreAction {
	switchMediaType: () => void;
	setQuery: (q: string) => void;
	setGenre: (genre: string) => void;
	setTag: (tag: string) => void;
	setFormat: (format: string) => void;
	setStatus: (status: string) => void;
	setRelease: (year: string) => void;
	setSort: (method: string) => void;
	reset: () => void;
}

export const useSearchStore = create<SearchStoreState & SearchStoreAction>()((set) => ({
	mediaType: "anime",
	q: "",
	genres: new Set(),
	excludedGenres: new Set(),
	tags: new Set(),
	excludedTags: new Set(),
	format: "",
	status: "",
	release: "",
	sort: "popularity",

	switchMediaType: () =>
		set((state) => ({ mediaType: state.mediaType === "anime" ? "manga" : "anime" })),

	setQuery: (q) => set(() => ({ q: q })),

	setGenre: (genre) =>
		set((state) => {
			if (!state.genres.has(genre) && !state.excludedGenres.has(genre))
				return { genres: state.genres.add(genre) };
			else if (state.genres.has(genre) && !state.excludedGenres.has(genre))
				return {
					excludedGenres: state.excludedGenres.add(genre),
					genres: deleteFromSet(state.genres, genre),
				};
			else return { excludedGenres: deleteFromSet(state.excludedGenres, genre) };
		}),

	setTag: (tag) =>
		set((state) => {
			if (!state.tags.has(tag) && !state.excludedTags.has(tag))
				return { tags: state.tags.add(tag) };
			else if (state.tags.has(tag) && !state.excludedTags.has(tag))
				return {
					excludedTags: state.excludedTags.add(tag),
					tags: deleteFromSet(state.tags, tag),
				};
			else return { excludedTags: deleteFromSet(state.excludedTags, tag) };
		}),

	setFormat: (format) => set((state) => ({ format: state.format !== format ? format : "" })),

	setStatus: (status) => set((state) => ({ status: state.status !== status ? status : "" })),

	setRelease: (year) => set((state) => ({ release: state.release !== year ? year : "" })),

	setSort: (method) => set(() => ({ sort: method })),

	reset: () =>
		set(() => ({
			q: "",
			genres: new Set(),
			excludedGenres: new Set(),
			tags: new Set(),
			excludedTags: new Set(),
			format: "",
			status: "",
			release: "",
			sort: "popularity",
		})),
}));
