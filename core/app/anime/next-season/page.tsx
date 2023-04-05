import type { Metadata } from "next";
import { getNextSeason } from "@/utils/fetch";
import Navbar from "@/components/navbar/Navbar";
import HighlightSection from "@/components/common/HighlightSection";

export const metadata: Metadata = {
	title: "Upcoming Next Season",
};

export default async function NextSeason() {
	const data = await getNextSeason();

	return (
		<main className="mt-8 grid grid-cols-[min-content_auto]">
			<Navbar />
			<section className="mt-12 w-full pl-4">
				<HighlightSection data={data} mediaType="anime" />
			</section>
		</main>
	);
}
