import type { Metadata } from "next";
import { getPopularAnime } from "@/utils/fetch";
import Navbar from "@/components/navbar/Navbar";
import HighlightSection from "@/components/common/HighlightSection";

export const metadata: Metadata = {
	title: "Most Popular Anime",
};

export default async function PopularAnime() {
	const data = await getPopularAnime();

	return (
		<main className="mt-8 grid grid-cols-[min-content_auto]">
			<Navbar />
			<section className="mt-12 w-full pl-4">
				<h1 className="mb-4 text-center text-3xl font-bold capitalize tracking-normal text-dark-100 md:text-4xl">
					Most popular anime
				</h1>
				<HighlightSection data={data} mediaType="anime" />
			</section>
		</main>
	);
}
