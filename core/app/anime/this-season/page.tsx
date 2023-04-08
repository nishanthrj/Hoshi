import type { Metadata } from "next";
import { getCurrentSeason } from "@/utils/fetch";
import Navbar from "@/components/navbar/Navbar";
import HighlightSection from "@/components/common/HighlightSection";

export const metadata: Metadata = {
	title: "Popular This Season",
};

export default async function CurrentSeason() {
	const data = await getCurrentSeason();

	return (
		<main className="mt-8 grid grid-cols-[min-content_auto]">
			<Navbar />
			<section className="mt-12 w-full sm:pl-4">
				<h1 className="mb-4 text-center text-3xl font-bold capitalize tracking-normal text-dark-100 md:text-4xl">
					Popular this season
				</h1>
				<HighlightSection data={data} mediaType="anime" />
			</section>
		</main>
	);
}
