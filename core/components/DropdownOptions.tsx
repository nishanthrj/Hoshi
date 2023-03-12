import { uuid } from "uuidv4";
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

interface DropdownProps {
	mediaType: string;
	title: string;
}
const getOptions = function (mediaType: string, title: string): string[] {
	if (title === "genres") return genres;
	else if (title === "format" && mediaType === "anime") return animeFormat;
	else if (title === "format" && mediaType === "manga") return mangaFormat;
	else if (title === "status" && mediaType === "anime") return animeStatus;
	else if (title === "status" && mediaType === "manga") return mangaStatus;
	else if (title === "sort") return sortOptions;
	else return generateSeason(mediaType);
};

export default function DropdownOptions({ mediaType, title }: DropdownProps) {
	const options = getOptions(mediaType, title);

	return (
		<>
			<li className="mb-1 text-xs uppercase text-dark-300">{title}</li>
			{options.map((option: string) => (
				<li
					key={uuid()}
					className="inline-flex w-full cursor-pointer items-center justify-between rounded p-2 text-dark-200 transition-all duration-150 hover:bg-dark-400 hover:text-dark-100">
					{option}
				</li>
			))}

			{title === "genres" && (
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
