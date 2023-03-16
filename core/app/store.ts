import { create } from "zustand";
import { deleteFromSet } from "./utils";

interface NavbarState {
	isOpen: boolean;
	toggleNavbar: () => void;
	closeNavbar: () => void;
}

interface DropdownStore {
	openDropdown: string | null;
	setOpenDropdown: (name: string | null) => void;
}

interface SearchStoreState {
	mediaType: string;
	q: string;
	genres: Set<string>;
	excludedGenres: Set<string>;
	tags: Set<string>;
	excludedTags: Set<string>;
	format: Set<string>;
	status: Set<string>;
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

const initialSearchState: SearchStoreState = {
	mediaType: "anime",
	q: "",
	genres: new Set(),
	excludedGenres: new Set(),
	tags: new Set(),
	excludedTags: new Set(),
	format: new Set(),
	status: new Set(),
	release: "",
	sort: "popularity",
};

export const useNavbarStore = create<NavbarState>()((set) => ({
	isOpen: false,
	toggleNavbar: () => set((state) => ({ isOpen: !state.isOpen })),
	closeNavbar: () => set(() => ({ isOpen: false })),
}));

export const useDropdownStore = create<DropdownStore>()((set) => ({
	openDropdown: null,
	setOpenDropdown: (name) =>
		set((state) => ({ openDropdown: state.openDropdown !== name ? name : null })),
}));

export const useSearchStore = create<SearchStoreState & SearchStoreAction>()((set) => ({
	mediaType: "anime",
	q: "",
	genres: new Set(),
	excludedGenres: new Set(),
	tags: new Set(),
	excludedTags: new Set(),
	format: new Set(),
	status: new Set(),
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

	setFormat: (format) =>
		set((state) => ({
			format: !state.format.has(format)
				? state.format.add(format)
				: deleteFromSet(state.format, format),
		})),

	setStatus: (status) =>
		set((state) => ({
			status: !state.status.has(status)
				? state.status.add(status)
				: deleteFromSet(state.status, status),
		})),

	setRelease: (year) => set(() => ({ release: year })),

	setSort: (method) => set(() => ({ sort: method })),

	reset: () =>
		set(() => ({
			mediaType: "anime",
			q: "",
			genres: new Set(),
			excludedGenres: new Set(),
			tags: new Set(),
			excludedTags: new Set(),
			format: new Set(),
			status: new Set(),
			release: "",
			sort: "popularity",
		})),
}));
