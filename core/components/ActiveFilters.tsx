"use client";
import { v4 as uuid } from "uuid";
import { AiFillTags } from "react-icons/ai";
import { useSearchStore } from "@/stores/search";
import Tag from "./Tag";
import ClearAllButton from "./ClearAllButton";

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
				{query && <Tag>Search: {query}</Tag>}

				{[...genres].map((genre) => (
					<Tag key={uuid()}>{genre}</Tag>
				))}

				{[...excludedGenres].map((exgenre) => (
					<Tag key={uuid()}>~{exgenre}</Tag>
				))}

				{[...tags].map((tag) => (
					<Tag key={uuid()}>{tag}</Tag>
				))}

				{[...excludedTags].map((extag) => (
					<Tag key={uuid()}>~{extag}</Tag>
				))}

				{format && <Tag>{format}</Tag>}

				{status && <Tag>{status}</Tag>}

				{release && <Tag>{release}</Tag>}

				{(query ||
					genres.size ||
					tags.size ||
					excludedGenres.size ||
					excludedTags.size ||
					format ||
					status ||
					release) && <ClearAllButton />}
			</div>
		</div>
	);
}
