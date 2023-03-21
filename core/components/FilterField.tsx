"use client";
import ActiveFilterMini from "./ActiveFilterMini";
import Dropdown from "./Dropdown";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { useDropdownStore } from "@/stores/common";

interface FilterFieldProps {
	name: string;
}

export default function FilterField({ name }: FilterFieldProps) {
	const openDropdown = useDropdownStore((state) => state.openDropdown);
	const setOpenDropdown = useDropdownStore((state) => state.setOpenDropdown);

	return (
		<div className="relative snap-center">
			<span className="mb-1 ml-2 text-sm font-medium capitalize text-dark-100">{name}</span>
			<div
				onClick={() => setOpenDropdown(name)}
				className="flex items-center justify-between rounded-md bg-dark-600 py-[.45rem] px-3 text-dark-200 shadow">
				<ActiveFilterMini name={name} />
				{openDropdown === name ? (
					<MdExpandMore className="h-5 w-5" />
				) : (
					<MdExpandLess className="h-5 w-5" />
				)}
			</div>
			<Dropdown name={name} />
		</div>
	);
}
