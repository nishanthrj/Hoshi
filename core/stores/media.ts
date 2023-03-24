import { create } from "zustand";

interface MediaStore {
	mediaType: string;
	mediaId: number | null;
	activeTab: string;
	setActiveTab(tab: string): void;
}

export const useMediaStore = create<MediaStore>((set) => ({
	mediaType: "anime",
	mediaId: null,
	activeTab: "overview",
	setActiveTab: (tab) => set(() => ({ activeTab: tab })),
}));
