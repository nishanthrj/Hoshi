import { create } from "zustand";

interface DropdownStore {
	openDropdown: string | null;
	setOpenDropdown: (name: string | null) => void;
}

export const useDropdownStore = create<DropdownStore>()((set) => ({
	openDropdown: null,
	setOpenDropdown: (name) =>
		set((state) => ({ openDropdown: state.openDropdown !== name ? name : null })),
}));
