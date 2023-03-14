import { create } from "zustand";

interface NavbarState {
	isOpen: boolean;
	toggleNavbar: () => void;
	closeNavbar: () => void;
}

interface SearchStore {
	mediaType: string;
	openDropdown: string | null;
	switchMediaType: () => void;
	setOpenDropdown: (name: string | null) => void;
}

export const useNavbarStore = create<NavbarState>()((set) => ({
	isOpen: false,
	toggleNavbar: () => set((state) => ({ isOpen: !state.isOpen })),
	closeNavbar: () => set(() => ({ isOpen: false })),
}));

export const useSearchStore = create<SearchStore>()((set) => ({
	mediaType: "anime",
	openDropdown: null,
	switchMediaType: () =>
		set((state) => ({ mediaType: state.mediaType === "anime" ? "manga" : "anime" })),
	setOpenDropdown: (name) =>
		set((state) => ({ openDropdown: state.openDropdown !== name ? name : null })),
}));
