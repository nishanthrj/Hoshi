import { create } from "zustand";


interface NavbarState {
	isOpen: boolean;
	toggleNavbar: () => void;
	closeNavbar: () => void;
}

interface SearchStore {
	mediaType: string;
}


export const useNavbarStore = create<NavbarState>()((set) => ({
	isOpen: false,
	toggleNavbar: () => set((state) => ({ isOpen: !state.isOpen })),
	closeNavbar: () => set((state) => ({ isOpen: false })),
}));

export const useSearchStore = create<SearchStore>()((set) => ({
	mediaType: "Anime",
}));
