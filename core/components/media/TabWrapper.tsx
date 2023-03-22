"use client";

import { useMediaStore } from "@/stores/media";

interface TabWrapper {
	children: React.ReactNode;
	name: string;
}

export default function TabWrapper({ children, name }: TabWrapper) {
	const activeTab = useMediaStore((state) => state.activeTab);

	return <section className={`${activeTab === name ? "block" : "hidden"}`}>{children}</section>;
}
