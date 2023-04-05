import type { Metadata } from "next";
import { useNavbarStore } from "@/stores/navbar";
import { getTrendingMedia } from "@/utils/fetch";
import Navbar from "@/components/navbar/Navbar";
import MediaSection from "@/components/home/MediaSection";
import TrendingSection from "@/components/home/TrendingSection";
import "./trending.css";

export const metadata: Metadata = {
	title: "Home | Hoshi",
};

export default async function Home() {
	useNavbarStore.setState({ currentPath: "/" });

	const data = await getTrendingMedia();

	return (
		<main className="grid grid-cols-[min-content_auto]">
			<Navbar />
			<section className="mt-14 w-full pl-4">
				<div className="relative mx-auto grid h-96 w-[min(70rem,100%)] pr-4">
					<TrendingSection data={data} />
				</div>
				<div className="flex flex-col items-center">
					<MediaSection title="popular this season" path="\anime\this-season" />
					<MediaSection title="upcoming next season" path="\anime\next-season" />
					<MediaSection title="highest rated anime" path="\anime\top" />
					<MediaSection title="most popular anime" path="\anime\popular" />
					<MediaSection title="highest rated manga" path="\manga\top" />
					<MediaSection title="most popular manga" path="\manga\popular" />
					<MediaSection title="most popular manhwa" path="\manga\top-manhwa" />
				</div>
			</section>
		</main>
	);
}
