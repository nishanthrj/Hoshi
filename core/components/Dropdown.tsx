"use client";
import { v4 as uuid } from "uuid";
import { useDropdownStore } from "@/stores/common";
import { useSearchStore } from "@/stores/search";
import DropdownOption from "./DropdownOption";
import { getOptions } from "../utils/filters";

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
	const options = getOptions(mediaType, name);

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

	const getDropdownHeight = () => {
		if (mediaType === "anime" && name === "format") return "14.5rem";
		else if (mediaType === "anime" && name === "status") return "10rem";
		else if (mediaType === "manga" && name === "format") return "19rem";
		else if (mediaType === "manga" && name === "status") return "14.5rem";
		else if (name === "sort") return "12.5rem";
		else return "20rem";
	};

	const style: React.CSSProperties = {
		height: openDropdown === name ? getDropdownHeight() : "0rem",
	};

	return (
		<div
			className={`dropdown absolute z-40 mt-4 w-44 select-none overflow-y-scroll rounded-md bg-dark-600 text-sm font-semibold transition-[height] duration-300  ${
				name === "sort" && "xl:-left-5 xl:w-36"
			}`}
			onClick={selectFilter}
			style={style}>
			<ul className="p-4 pr-2">
				<span className="mb-1 text-xs uppercase text-dark-300">{name}</span>
				{options[0].map((option: string) => (
					<DropdownOption key={uuid()} name={name} option={option} />
				))}
				{name === "genres" &&
					options[1].map((option: string) => (
						<DropdownOption key={uuid()} name={"tags"} option={option} />
					))}
			</ul>
		</div>
	);
}
