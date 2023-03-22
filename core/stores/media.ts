import { create } from "zustand";

interface MediaStore {
	mediaType: string;
	activeTab: string;
	setActiveTab(tab: string): void;
}

export const useMediaStore = create<MediaStore>((set) => ({
	mediaType: "anime",
	activeTab: "overview",
	setActiveTab: (tab) => set(() => ({ activeTab: tab })),
}));
