import { create } from "zustand";

interface MediaStore {
	mediaType: string;
	mediaId: number | null;
	malId: number | null;
	kitsuId: number | null;
	activeTab: string;
	setActiveTab(tab: string): void;
}

export const useMediaStore = create<MediaStore>((set) => ({
	mediaType: "anime",
	mediaId: null,
	malId: null,
	kitsuId: null,
	activeTab: "overview",
	setActiveTab: (tab) => set(() => ({ activeTab: tab })),
}));
