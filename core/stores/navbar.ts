import { create } from "zustand";

interface NavbarStore {
	isOpen: boolean;
	currentPath: string;
	toggleNavbar: () => void;
	closeNavbar: () => void;
	setCurrentPath: (path: string) => void;
}

export const useNavbarStore = create<NavbarStore>()((set) => ({
	isOpen: false,
	currentPath: "/",
	toggleNavbar: () => set((state) => ({ isOpen: !state.isOpen })),
	closeNavbar: () => set(() => ({ isOpen: false })),
	setCurrentPath: (path) => set(() => ({ currentPath: path })),
}));
