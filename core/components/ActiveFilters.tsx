"use client";
import { AiFillTags } from "react-icons/ai";
import { useSearchStore } from "@/stores/search";
import { v4 as uuid } from "uuid";

export default function ActiveFilters() {
	const [query, genres, excludedGenres, tags, excludedTags, format, status, release] =
		useSearchStore((state) => [
			state.q,
			state.genres,
			state.excludedGenres,
			state.tags,
			state.excludedTags,
			state.format,
			state.status,
			state.release,
		]);

	return (
		<div className="flex gap-4 text-sm font-semibold text-dark-200">
			<AiFillTags className="h-6 w-6" />
			<div className="flex w-full flex-wrap gap-2 overflow-hidden">
				{query && (
					<span className="select-none rounded bg-dark-400 p-2 text-xs leading-none text-dark-100">
						Search: {query}
					</span>
				)}
				{[...genres].map((genre) => (
					<span
						key={uuid()}
						className="select-none rounded bg-dark-400 p-2 text-xs leading-none text-dark-100">
						{genre}
					</span>
				))}
				{[...excludedGenres].map((exgenre) => (
					<span
						key={uuid()}
						className="select-none rounded bg-dark-400 p-2 text-xs leading-none text-dark-100">
						~{exgenre}
					</span>
				))}
				{[...tags].map((tag) => (
					<span
						key={uuid()}
						className="select-none rounded bg-dark-400 p-2 text-xs leading-none text-dark-100">
						{tag}
					</span>
				))}
				{[...excludedTags].map((extag) => (
					<span
						key={uuid()}
						className="select-none rounded bg-dark-400 p-2 text-xs leading-none text-dark-100">
						~{extag}
					</span>
				))}
				{format && (
					<span className="select-none rounded bg-dark-400 p-2 text-xs leading-none text-dark-100">
						{format}
					</span>
				)}
				{status && (
					<span className="select-none rounded bg-dark-400 p-2 text-xs leading-none text-dark-100">
						{status}
					</span>
				)}
				{release && (
					<span className="select-none rounded bg-dark-400 p-2 text-xs leading-none text-dark-100">
						{release}
					</span>
				)}
			</div>
		</div>
	);
}
