import type { Metadata } from "next";
import { getCurrentSeason } from "@/utils/fetch";
import HighlightResults from "@/components/common/HighlightResults";

export const metadata: Metadata = {
	title: "Popular This Season",
};

export default async function CurrentSeason() {
	const data = await getCurrentSeason();

	return (
		<main className="mt-8">
			<section className="mt-12 w-full sm:pl-4">
				<h1 className="mb-4 text-center text-3xl font-bold capitalize tracking-normal text-dark-100 md:text-4xl">
					Popular this season
				</h1>
				<HighlightResults data={data} mediaType="anime" />
			</section>
		</main>
	);
}
