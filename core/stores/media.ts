import { create } from "zustand";

interface MediaStore {
	mediaType: string;
	mediaId: number;
	malId: number;
	kitsuId: number;
	activeTab: string;
	setActiveTab(tab: string): void;
}

export const useMediaStore = create<MediaStore>((set) => ({
	mediaType: "anime",
	mediaId: 0,
	malId: 0,
	kitsuId: 0,
	activeTab: "overview",
	setActiveTab: (tab) => set(() => ({ activeTab: tab })),
}));
