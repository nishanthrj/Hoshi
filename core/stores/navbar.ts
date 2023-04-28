import { create } from "zustand";

interface NavbarStore {
	isOpen: boolean;
	toggleNavbar: () => void;
	closeNavbar: () => void;
}

export const useNavbarStore = create<NavbarStore>()((set) => ({
	isOpen: false,
	toggleNavbar: () => set((state) => ({ isOpen: !state.isOpen })),
	closeNavbar: () => set(() => ({ isOpen: false })),
}));
