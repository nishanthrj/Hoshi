"use client";
import { useSearchStore } from "@/app/store";
import { CgSearch } from "react-icons/cg";

export default function SearchBar() {
	const setQuery = useSearchStore((state) => state.setQuery);
	const setSearchQuery = function (e: React.FormEvent) {
		const searchField = e.currentTarget as HTMLInputElement;
		const value: string = searchField.value;
		if (value.length >= 3) setQuery(value);
	};

	return (
		<div className="pr-4 xl:pr-0">
			<span className="mb-1 ml-2 text-sm font-medium text-dark-100">Search</span>
			<div className="flex items-center gap-2 rounded-md bg-dark-600 py-[.35rem] pl-3 text-dark-200 shadow">
				<CgSearch className="h-5 w-5" />
				<input
					type="text"
					autoComplete="off"
					placeholder="Search"
					onInput={setSearchQuery}
					className="w-full border-none bg-transparent py-[.35rem] text-sm font-medium tracking-wide text-dark-100 outline-none placeholder:text-dark-300"
				/>
			</div>
		</div>
	);
}
