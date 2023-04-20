import type { Metadata } from "next";
import { getTopManhwa } from "@/lib/fetch";
import HighlightSection from "@/components/common/HighlightSection";

export const metadata: Metadata = {
	title: "Highest Rated Manhwa",
};

export default async function TopManhwa() {
	const data = await getTopManhwa();

	return (
		<main className="mt-8">
			<section className="mt-12 w-full pl-4">
				<h1 className="mb-4 text-center text-3xl font-bold capitalize tracking-normal text-dark-100 md:text-4xl">
					Highest rated manhwa
				</h1>
				<HighlightSection data={data} mediaType="manga" />
			</section>
		</main>
	);
}
