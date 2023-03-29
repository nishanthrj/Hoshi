"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchStore } from "@/stores/search";
import { getSearchResults } from "@/utils/fetch";
import MediaCard from "@/components/search/MediaCard";

export default function SearchResults() {
	const mediaType = useSearchStore((state) => state.mediaType);
	const [query, genres, excludedGenres, tags, excludedTags, format, status, release, sort] =
		useSearchStore((state) => [
			state.q,
			state.genres,
			state.excludedGenres,
			state.tags,
			state.excludedTags,
			state.format,
			state.status,
			state.release,
			state.sort,
		]);

	const filters = {
		...(query ? { q: query } : {}),
		...(format ? { subtype: format } : {}),
		...(status ? { status: status } : {}),
		...(release ? (mediaType === "anime" ? { season: release } : { year: release }) : {}),
		...(genres.size ? { genres: [...genres].join(",") } : {}),
		...(tags.size ? { tags: [...tags].join(",") } : {}),
		...(excludedGenres.size ? { exclude_genres: [...excludedGenres].join(",") } : {}),
		...(excludedTags.size ? { exclude_tags: [...excludedTags].join(",") } : {}),
		...(sort ? { sort_by: sort !== "Release Date" ? sort.toLowerCase() : "startDate" } : {}),
	};

	const { ref, inView } = useInView({ triggerOnce: true });

	const { fetchNextPage, hasNextPage, data } = useInfiniteQuery({
		queryKey: [mediaType, filters],
		queryFn: ({ pageParam = 1 }) => getSearchResults(pageParam, mediaType, filters),
		getNextPageParam: (lastPage) => {
			return lastPage.pagination?.currentPage !== lastPage.pagination.lastPage
				? lastPage.pagination.currentPage + 1
				: undefined;
		},
		staleTime: 5 * 60 * 1000,
		cacheTime: 20 * 60 * 1000,
	});

	useEffect(() => {
		if (inView && hasNextPage) fetchNextPage();
	}, [inView]);

	return (
		<div className="my-8 grid w-full grid-cols-[repeat(auto-fill,minmax(26rem,35rem))] justify-center gap-y-8 gap-x-12 overflow-hidden">
			{data?.pages
				.flatMap((page) => page.data)
				.map((media: any, i: number) => {
					return (
						<MediaCard
							ref={i % 15 === 0 ? ref : null}
							key={media._id}
							id={media._id}
							title={media.title}
							slug={media.slug}
							poster={media.poster}
							score={Math.round(media.score)}
							format={media.type}
							length={
								mediaType !== "manga"
									? media.type === "Movie"
										? media.runtime
										: media.episodeCount
									: media.chapterCount
							}
							status={media.status}
							genres={media.genres}
							synopsis={media.synopsis}
						/>
					);
				})}
		</div>
	);
}
