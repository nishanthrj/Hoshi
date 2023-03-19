"use client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import MediaCard from "./MediaCard";
import { useSearchStore } from "@/app/store";
import { v4 as uuid } from "uuid";

const getData = (page: number, filters: any) =>
	axios
		.get("http://127.0.0.1:8000/anime", { params: { page: page, ...filters } })
		.then((res) => res.data);

export default function SearchResults() {
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
		...(release ? { season: release } : {}),
		...(genres.size ? { genres: [...genres].join(",") } : {}),
		...(tags.size ? { tags: [...tags].join(",") } : {}),
		...(excludedGenres.size ? { exclude_genres: [...excludedGenres].join(",") } : {}),
		...(excludedTags.size ? { exclude_tags: [...excludedTags].join(",") } : {}),
		...(sort ? { sort_by: sort !== "Release Date" ? sort.toLowerCase() : "startDate" } : {}),
	};

	const { ref, inView } = useInView({ triggerOnce: true });

	const { fetchNextPage, hasNextPage, data } = useInfiniteQuery({
		queryKey: ["anime", filters],
		queryFn: ({ pageParam = 1 }) => getData(pageParam, filters),
		getNextPageParam: (lastPage) => {
			return lastPage.pagination.currentPage !== lastPage.pagination.lastPage
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
					if (i % 15 === 0)
						return (
							<MediaCard
								ref={ref}
								key={media._id}
								id={media._id}
								title={media.title}
								slug={media.slug}
								poster={media.poster}
								score={Math.round(media.score)}
								format={media.type}
								length={media.episodeCount}
								status={media.status}
								genres={media.genres}
								synopsis={media.synopsis}
							/>
						);
					else
						return (
							<MediaCard
								key={media._id}
								id={media._id}
								title={media.title}
								slug={media.slug}
								poster={media.poster}
								score={Math.round(media.score)}
								format={media.type}
								length={media.episodeCount}
								status={media.status}
								genres={media.genres}
								synopsis={media.synopsis}
							/>
						);
				})}
		</div>
	);
}
