import type { Metadata } from "next";
import { getNextSeason } from "@/utils/fetch";
import HighlightResults from "@/components/common/HighlightResults";

export const metadata: Metadata = {
	title: "Upcoming Next Season",
};

export default async function NextSeason() {
	const data = await getNextSeason();

	return (
		<main className="mt-8">
			<section className="mt-12 w-full pl-4">
				<h1 className="mb-4 text-center text-3xl font-bold capitalize tracking-normal text-dark-100 md:text-4xl">
					Upcoming Next Season
				</h1>
				<HighlightResults data={data} mediaType="anime" />
			</section>
		</main>
	);
}
