import type { Metadata } from "next";
import { useNavbarStore } from "@/stores/navbar";
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
import Navbar from "@/components/navbar/Navbar";
import MediaSection from "@/components/home/MediaSection";
import TrendingSection from "@/components/home/TrendingSection";
import "./splide.css";

export const metadata: Metadata = {
	title: "Home | Hoshi",
};

export default async function Home() {
	useNavbarStore.setState({ currentPath: "/" });

	const trendingData = await getTrendingMedia();
	const popularAnime = await getPopularAnime();
	const popularManga = await getPopularManga();
	const topAnime = await getTopAnime();
	const topManga = await getTopManga();
	const topManhwa = await getTopManhwa();
	const currentSeason = await getCurrentSeason();
	const nextSeason = await getNextSeason();

	return (
		<main className="grid grid-cols-[min-content_auto]">
			<Navbar />
			<section className="mt-14 w-full pl-4">
				<div className="relative mx-auto grid h-96 w-[min(70rem,100%)] pr-4">
					<TrendingSection data={trendingData} />
				</div>
				<div className="flex flex-col items-center">
					<MediaSection
						title="popular this season"
						path="\anime\this-season"
						data={currentSeason}
					/>
					<MediaSection
						title="upcoming next season"
						path="\anime\next-season"
						data={nextSeason}
					/>
					<MediaSection title="highest rated anime" path="\anime\top" data={topAnime} />
					<MediaSection
						title="most popular anime"
						path="\anime\popular"
						data={popularAnime}
					/>
					<MediaSection title="highest rated manga" path="\manga\top" data={topManga} />
					<MediaSection
						title="most popular manga"
						path="\manga\popular"
						data={popularManga}
					/>
					<MediaSection
						title="most popular manhwa"
						path="\manga\top-manhwa"
						data={topManhwa}
					/>
				</div>
			</section>
		</main>
	);
}
