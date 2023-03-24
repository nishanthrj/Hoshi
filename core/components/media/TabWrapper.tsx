"use client";

import { useMediaStore } from "@/stores/media";

interface TabWrapperProps {
	children: React.ReactNode;
	name: string;
}

export default function TabWrapper({ children, name }: TabWrapperProps) {
	const activeTab = useMediaStore((state) => state.activeTab);

	return (
		<section
			className={`${activeTab === name ? "block" : "hidden"} flex flex-col items-center`}>
			{children}
		</section>
	);
}
