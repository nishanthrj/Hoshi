import type { Metadata } from "next";
import { useNavbarStore } from "@/stores/navbar";
import Navbar from "@/components/navbar/Navbar";
import MediaSection from "@/components/home/MediaSection";
import TrendingSection from "@/components/home/TrendingSection";
import "./trending.css";

export const metadata: Metadata = {
	title: "Home | Hoshi",
};

export default function Home() {
	useNavbarStore.setState({ currentPath: "/" });

	return (
		<main className="grid grid-cols-[min-content_auto]">
			<Navbar />
			<section className="mt-12 w-full pl-4">
				<TrendingSection />
				<div className="flex flex-col items-center">
					<MediaSection title="popular this season" />
					<MediaSection title="upcoming next season" />
					<MediaSection title="highest rated anime" />
					<MediaSection title="most popular anime" />
					<MediaSection title="highest rated manga" />
					<MediaSection title="most popular manga" />
					<MediaSection title="most popular manhwa" />
				</div>
			</section>
		</main>
	);
}
