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
	setExcludedGenre: (genre: string) => void;
	setTag: (tag: string) => void;
	setExcludedTag: (genre: string) => void;
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
	...initialSearchState,

	switchMediaType: () =>
		set((state) => ({ mediaType: state.mediaType === "anime" ? "manga" : "anime" })),

	setQuery: (q) => set(() => ({ q: q })),

	setGenre: (genre) =>
		set((state) => ({
			genres: !state.genres.has(genre)
				? state.genres.add(genre)
				: deleteFromSet(state.genres, genre),
		})),

	setExcludedGenre: (genre) =>
		set((state) => ({
			excludedGenres: !state.excludedGenres.has(genre)
				? state.excludedGenres.add(genre)
				: deleteFromSet(state.excludedGenres, genre),
		})),

	setTag: (tag) =>
		set((state) => ({
			tags: !state.tags.has(tag) ? state.tags.add(tag) : deleteFromSet(state.tags, tag),
		})),

	setExcludedTag: (tag) =>
		set((state) => ({
			excludedTags: !state.excludedTags.has(tag)
				? state.excludedTags.add(tag)
				: deleteFromSet(state.excludedTags, tag),
		})),

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

	reset: () => set(initialSearchState),
}));
