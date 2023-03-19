"use client";
import { useSearchStore } from "@/app/store";
import { v4 as uuid } from "uuid";

import {
	genres,
	tags,
	animeFormat,
	mangaFormat,
	animeStatus,
	mangaStatus,
	sortOptions,
	generateSeason,
} from "@/app/filters";
import DropdownOptionItem from "./DropdownOptionItem";

interface DropdownProps {
	name: string;
}

const getOptions = function (mediaType: string, name: string): string[] {
	if (name === "genres") return genres;
	else if (name === "format" && mediaType === "anime") return animeFormat;
	else if (name === "format" && mediaType === "manga") return mangaFormat;
	else if (name === "status" && mediaType === "anime") return animeStatus;
	else if (name === "status" && mediaType === "manga") return mangaStatus;
	else if (name === "sort") return sortOptions;
	else return generateSeason(mediaType);
};

export default function DropdownOptions({ name }: DropdownProps) {
	const mediaType = useSearchStore((state) => state.mediaType);
	const options = getOptions(mediaType, name);

	return (
		<>
			<span className="mb-1 text-xs uppercase text-dark-300">{name}</span>
			{options.map((option: string) => (
				<DropdownOptionItem key={uuid()} name={name} option={option} />
			))}

			{name === "genres" && (
				<>
					<li>&nbsp;</li>
					<span className="mb-1 text-xs uppercase text-dark-300">tags</span>
					{tags.map((option: string) => (
						<DropdownOptionItem key={uuid()} name={name} option={option} />
					))}
				</>
			)}
		</>
	);
}
