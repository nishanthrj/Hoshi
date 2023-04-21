"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getEpisodes } from "@/utils/fetch";
import EpisodeCard from "@/components/media/EpisodeCard";

interface EpisodesTabProps {
	id: number;
}

export default function EpisodesTab({ id }: EpisodesTabProps) {
	const { ref, inView } = useInView({ triggerOnce: true });

	const { fetchNextPage, hasNextPage, data } = useInfiniteQuery({
		queryKey: ["episodes", id],
		queryFn: ({ pageParam = 0 }) => getEpisodes(pageParam, id),
		getNextPageParam: (lastPage) => {
			const page = lastPage.links?.next?.match(/page\[offset\]=(\d+)/)?.[1];
			return lastPage.links.next && page ? parseInt(page) : undefined;
		},
		staleTime: 3 * 60 * 60 * 1000,
		cacheTime: 6 * 60 * 60 * 1000,
	});

	useEffect(() => {
		if (inView && hasNextPage) fetchNextPage();
	}, [inView, hasNextPage, fetchNextPage]);

	return (
		<div className="mt-20 w-[min(70rem,100%)] pr-4 md:ml-5">
			<h1 className="mb-4 text-lg font-semibold uppercase tracking-widest text-dark-100">
				Episodes
			</h1>
			{data ? (
				<div className="grid grid-cols-[repeat(auto-fill,21rem)] gap-8">
					{data?.pages
						.flatMap((page) => page.data)
						.map((ep: Episode, i: number) => {
							return (
								<EpisodeCard
									ref={i % 20 === 0 ? ref : null}
									key={ep.id}
									title={ep.attributes.canonicalTitle}
									number={ep.attributes.number}
									image={ep.attributes.thumbnail?.original}
								/>
							);
						})}
				</div>
			) : (
				<p className="pl-4 text-base font-normal text-dark-100">
					We can&apos;t find any episodes for this anime.
				</p>
			)}
		</div>
	);
}
