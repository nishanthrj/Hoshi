import { create } from "zustand";

interface NavbarState {
	isOpen: boolean;
	toggleNavbar: () => void;
	closeNavbar: () => void;
}

interface SearchStore {
	mediaType: string;
	switchMediaType: () => void;
}

export const useNavbarStore = create<NavbarState>()((set) => ({
	isOpen: false,
	toggleNavbar: () => set((state) => ({ isOpen: !state.isOpen })),
	closeNavbar: () => set(() => ({ isOpen: false })),
}));

export const useSearchStore = create<SearchStore>()((set) => ({
	mediaType: "anime",
	switchMediaType: () =>
		set((state) => ({ mediaType: state.mediaType === "anime" ? "manga" : "anime" })),
}));
