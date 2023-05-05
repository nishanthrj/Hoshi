import type { Metadata } from "next";
import {
	getTrendingMedia,
	getPopularAnime,
	getPopularManga,
	getTopAnime,
	getTopManga,
	getTopManhwa,
	getCurrentSeason,
	getNextSeason,
} from "@/utils/fetch";
import MediaSection from "@/components/home/MediaSection";
import TrendingSection from "@/components/home/TrendingSection";
import "@/styles/splide.css";

export const metadata: Metadata = {
	title: "Home",
};

export default async function Home() {
	const promises = [
		getTrendingMedia(),
		getPopularAnime(),
		getPopularManga(),
		getTopAnime(),
		getTopManga(),
		getTopManhwa(),
		getCurrentSeason(),
		getNextSeason(),
	];

	const results = await Promise.allSettled(promises);

	const [
		trendingData,
		popularAnime,
		popularManga,
		topAnime,
		topManga,
		topManhwa,
		currentSeason,
		nextSeason,
	] = results.map((result) => (result.status === "fulfilled" ? result.value : null));

	return (
		<main>
			<section className="mt-14 w-full pl-4">
				<div className="relative mx-auto mb-8 grid h-96 w-[min(70rem,100%)] pr-4">
					<TrendingSection data={trendingData as TrendingData} />
				</div>
				<div className="flex flex-col items-center">
					<MediaSection
						title="popular this season"
						path="\anime\this-season"
						mediaType="anime"
						data={currentSeason as Anime[]}
					/>
					<MediaSection
						title="upcoming next season"
						path="\anime\next-season"
						mediaType="anime"
						data={nextSeason as Anime[]}
					/>
					<MediaSection
						title="highest rated anime"
						path="\anime\top"
						mediaType="anime"
						data={topAnime as Anime[]}
					/>
					<MediaSection
						title="most popular anime"
						path="\anime\popular"
						mediaType="anime"
						data={popularAnime as Anime[]}
					/>
					<MediaSection
						title="highest rated manga"
						path="\manga\top"
						mediaType="manga"
						data={topManga as Manga[]}
					/>
					<MediaSection
						title="most popular manga"
						path="\manga\popular"
						mediaType="manga"
						data={popularManga as Manga[]}
					/>
					<MediaSection
						title="most popular manhwa"
						path="\manga\top-manhwa"
						mediaType="manga"
						data={topManhwa as Manga[]}
					/>
				</div>
			</section>
		</main>
	);
}
