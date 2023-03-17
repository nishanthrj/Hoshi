"use client";
import { useDropdownStore, useSearchStore } from "@/app/store";
import DropdownOptions from "./DropdownOptions";

interface DropdownProps {
	name: string;
}

export default function Dropdown({ name }: DropdownProps) {
	const mediaType = useSearchStore((state) => state.mediaType);
	const [openDropdown, setOpenDropdown] = useDropdownStore((state) => [
		state.openDropdown,
		state.setOpenDropdown,
	]);
	const [setGenre, setTag, setFormat, setStatus, setRelease, setSort] = useSearchStore(
		(state) => [
			state.setGenre,
			state.setTag,
			state.setFormat,
			state.setStatus,
			state.setRelease,
			state.setSort,
		],
	);

	const selectFilter = function (e: React.MouseEvent) {
		if (!(e.target instanceof HTMLLIElement)) return;

		const target: HTMLLIElement = e.target;
		const type: string = target.dataset.type as string;
		const value: string = target.dataset.option as string;

		if (type === "genres") setGenre(value);
		else if (type === "tags") setTag(value);
		else if (type === "format") setFormat(value);
		else if (type === "status") setStatus(value);
		else if (type === "release") {
			setOpenDropdown(null);
			setRelease(value);
		} else if (type === "sort") {
			setOpenDropdown(null);
			setSort(value);
		}
	};

	let height;
	if (mediaType === "anime" && name === "format") height = "14.5rem";
	else if (mediaType === "anime" && name === "status") height = "10rem";
	else if (mediaType === "manga" && name === "format") height = "19rem";
	else if (mediaType === "manga" && name === "status") height = "14.5rem";
	else if (name === "sort") height = "12.5rem";
	else height = "20rem";

	const style: React.CSSProperties = {
		height: openDropdown === name ? height : "0rem",
	};

	return (
		<div
			className={`dropdown absolute z-40 mt-4 w-44 select-none overflow-y-scroll rounded-md bg-dark-600 text-sm font-semibold transition-[height] duration-300  ${
				name === "sort" && "xl:-left-5 xl:w-36"
			}`}
			onClick={selectFilter}
			style={style}>
			<ul className="p-4 pr-2">
				<DropdownOptions name={name} />
			</ul>
		</div>
	);
}
