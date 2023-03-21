"use client";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { useDropdownStore } from "@/stores/common";

interface FilterFieldProps {
	name: string;
	children: React.ReactNode;
}

export default function DropdownField({ name, children }: FilterFieldProps) {
	const openDropdown = useDropdownStore((state) => state.openDropdown);
	const setOpenDropdown = useDropdownStore((state) => state.setOpenDropdown);

	return (
		<div
			onClick={() => setOpenDropdown(name)}
			className="flex items-center justify-between rounded-md bg-dark-600 py-[.45rem] px-3 text-dark-200 shadow">
			{children}
			{openDropdown === name ? (
				<MdExpandMore className="h-5 w-5" />
			) : (
				<MdExpandLess className="h-5 w-5" />
			)}
		</div>
	);
}
