import type { Metadata } from "next";
import { getTopAnime } from "@/utils/fetch";
import Navbar from "@/components/navbar/Navbar";
import HighlightSection from "@/components/common/HighlightSection";

export const metadata: Metadata = {
	title: "Highest Rated Anime",
};

export default async function TopAnime() {
	const data = await getTopAnime();

	return (
		<main className="mt-8 grid grid-cols-[min-content_auto]">
			<Navbar />
			<section className="mt-12 w-full pl-4">
				<h1 className="mb-4 text-center text-3xl font-bold capitalize tracking-normal text-dark-100 md:text-4xl">
					Highest rated anime
				</h1>
				<HighlightSection data={data} mediaType="anime" />
			</section>
		</main>
	);
}
