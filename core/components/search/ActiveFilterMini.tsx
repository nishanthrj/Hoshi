"use client";
import React from "react";
import { useSearchStore } from "@/stores/search";
import Tag from "@/components/common/Tag";

interface ActiveFilterMiniProps {
	name: string;
}

export default function ActiveFilterMini({ name }: ActiveFilterMiniProps) {
	const [genres, excludedGenres, tags, excludedTags, format, status, release] = useSearchStore(
		(state) => [
			state.genres,
			state.excludedGenres,
			state.tags,
			state.excludedTags,
			state.format,
			state.status,
			state.release,
		],
	);

	let size, value;
	if (name === "genres") {
		size = genres.size + excludedGenres.size + tags.size + excludedTags.size;
		value = [...genres, ...excludedGenres, ...tags, ...excludedTags][0];
	} else if (name === "format") {
		value = format;
	} else if (name === "status") {
		value = status;
	} else if (name === "release") {
		value = release;
	}

	if ((name === "format" || name === "status" || name === "release") && value) {
		return (
			<span className="select-none p-1 text-sm font-medium tracking-wide text-dark-100">
				{value}
			</span>
		);
	} else if (size) {
		return (
			<div className="inline-flex gap-1 p-[.15rem] font-medium">
				<Tag padding=".35rem">{value}</Tag>
				{size > 1 && <Tag padding=".35rem">+{size - 1}</Tag>}
			</div>
		);
	} else {
		return (
			<span className="select-none p-1 text-sm font-medium tracking-wide text-dark-200">
				Any
			</span>
		);
	}
}
