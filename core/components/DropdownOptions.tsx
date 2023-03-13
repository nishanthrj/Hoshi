"use client";
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
} from "@/app/utils";
import { useSearchStore } from "@/app/store";

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
			<li className="mb-1 text-xs uppercase text-dark-300">{name}</li>
			{options.map((option: string) => (
				<li
					key={uuid()}
					className="inline-flex w-full cursor-pointer items-center justify-between rounded p-2 text-dark-200 transition-all duration-150 hover:bg-dark-400 hover:text-dark-100">
					{option}
				</li>
			))}

			{name === "genres" && (
				<>
					<li>&nbsp;</li>
					<li className="mb-1 text-xs uppercase text-dark-300">tags</li>
					{tags.map((option: string) => (
						<li
							key={uuid()}
							className="inline-flex w-full cursor-pointer items-center justify-between rounded p-2 text-dark-200 transition-all duration-150 hover:bg-dark-400 hover:text-dark-100">
							{option}
						</li>
					))}
				</>
			)}
		</>
	);
}
