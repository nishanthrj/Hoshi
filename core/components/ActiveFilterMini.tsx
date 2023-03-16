"use client";
import React from "react";
import { useSearchStore } from "@/app/store";

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
		size = format.size;
		value = [...format][0];
	} else if (name === "status") {
		size = status.size;
		value = [...status][0];
	}

	if (name === "release" && release) {
		return (
			<span className="select-none p-1 text-sm font-medium tracking-wide text-dark-100">
				{release}
			</span>
		);
	}

	if (size) {
		return (
			<div className="inline-flex gap-1 p-[.15rem] font-medium">
				<span className="rounded bg-dark-400 p-[.35rem] text-xs leading-none text-dark-100">
					{value}
				</span>
				{size > 1 && (
					<span
						className={`rounded bg-dark-400 p-[.35rem] text-xs leading-none text-dark-100`}>
						+{size}
					</span>
				)}
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
