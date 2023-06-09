"use client";

import { useMediaStore } from "@/stores/media";

interface TabNavbarProps {
	type: string;
}

export default function TabNavbar({ type }: TabNavbarProps) {
	const [activeTab, setActiveTab] = useMediaStore((state) => [
		state.activeTab,
		state.setActiveTab,
	]);

	const setTab = function (e: React.MouseEvent) {
		if (!(e.target instanceof HTMLSpanElement)) return;

		const target: HTMLSpanElement = e.target;
		const tab: string = target.dataset.tab as string;

		setActiveTab(tab);
	};

	return (
		<nav
			onClick={setTab}
			className="my-4 mx-auto flex w-[min(50rem,100%)] items-center justify-around pr-4 pl-2 max-xs:text-sm">
			<span
				data-tab="overview"
				className={`cursor-pointer font-semibold text-dark-200 transition-colors duration-300 hover:text-dark-50 ${
					activeTab === "overview" ? "text-dark-50" : ""
				}`}>
				Overview
			</span>
			{type === "anime" && (
				<span
					data-tab="episodes"
					className={`cursor-pointer font-semibold text-dark-200 transition-colors duration-300 hover:text-dark-50 ${
						activeTab === "episodes" ? "text-dark-50" : ""
					}`}>
					Episodes
				</span>
			)}

			{type !== "manga" ? (
				<span
					data-tab="staff"
					className={`cursor-pointer font-semibold text-dark-200 transition-colors duration-300 hover:text-dark-50 ${
						activeTab === "staff" ? "text-dark-50" : ""
					}`}>
					Staff
				</span>
			) : (
				<span
					data-tab="characters"
					className={`cursor-pointer font-semibold text-dark-200 transition-colors duration-300 hover:text-dark-50 ${
						activeTab === "characters" ? "text-dark-50" : ""
					}`}>
					Characters
				</span>
			)}
		</nav>
	);
}
