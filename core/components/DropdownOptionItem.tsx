"use client";
import { useSearchStore } from "@/app/store";
import { MdCheck, MdClose } from "react-icons/md";

interface DropdownOptionItemProps {
	name: string;
	option: string;
}

export default function DropdownOptionItem({ name, option }: DropdownOptionItemProps) {
	const [
		selectedGenres,
		excludedGenres,
		selectedTags,
		excludedTags,
		selectedFormat,
		selectedStatus,
		selectedRelease,
		selectedSort,
	] = useSearchStore((state) => [
		state.genres,
		state.excludedGenres,
		state.tags,
		state.excludedTags,
		state.format,
		state.status,
		state.release,
		state.sort,
	]);

	if (selectedRelease === option || selectedSort === option) {
		return (
			<li
				data-option={option}
				data-type={name}
				className="inline-flex w-full cursor-pointer justify-between rounded p-2 text-dark-50 transition-all duration-150 hover:bg-dark-400">
				{option}
			</li>
		);
	} else if (excludedGenres.has(option) || excludedTags.has(option)) {
		return (
			<>
				<li
					data-option={option}
					data-type={name}
					className="inline-flex w-full cursor-pointer justify-between rounded p-2 text-dark-50 transition-all duration-150 hover:bg-dark-400">
					{option}
					<MdClose className="h-4 w-4" />
				</li>
			</>
		);
	} else if (
		selectedGenres.has(option) ||
		selectedFormat.has(option) ||
		selectedStatus.has(option) ||
		selectedTags.has(option)
	) {
		return (
			<>
				<li
					data-option={option}
					data-type={name}
					className="inline-flex w-full cursor-pointer justify-between rounded p-2 text-dark-50 transition-all duration-150 hover:bg-dark-400">
					{option}
					<MdCheck className="h-4 w-4" />
				</li>
			</>
		);
	} else
		return (
			<li
				data-option={option}
				data-type={name}
				className="inline-flex w-full cursor-pointer justify-between rounded p-2 text-dark-200 transition-all duration-150 hover:bg-dark-400 hover:text-dark-50">
				{option}
			</li>
		);
}
