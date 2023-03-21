"use client";

import { MdUnfoldMore } from "react-icons/md";
import { useDropdownStore } from "@/stores/common";
import { useSearchStore } from "@/stores/search";
import Dropdown from "@/components/search/Dropdown";

export default function SortField() {
	const setOpenDropdown = useDropdownStore((state) => state.setOpenDropdown);
	const sortMethod = useSearchStore((state) => state.sort);
	return (
		<div className="relative hidden w-28 justify-self-end xl:block">
			<div
				onClick={() => setOpenDropdown("sort")}
				className="flex cursor-pointer select-none items-center gap-1 whitespace-nowrap">
				<MdUnfoldMore className="h-5 w-5 text-dark-200" />
				<span className="select-none text-sm font-medium capitalize leading-none text-dark-100">
					{sortMethod}
				</span>
			</div>
			<Dropdown name="sort" />
		</div>
	);
}
