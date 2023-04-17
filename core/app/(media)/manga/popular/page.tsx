import type { Metadata } from "next";
import { getPopularManga } from "@/utils/fetch";
import HighlightSection from "@/components/common/HighlightSection";

export const metadata: Metadata = {
	title: "Most Popular Manga",
};

export default async function PopularManga() {
	const data = await getPopularManga();

	return (
		<main className="mt-8">
			<section className="mt-12 w-full pl-4">
				<h1 className="mb-4 text-center text-3xl font-bold capitalize tracking-normal text-dark-100 md:text-4xl">
					Most popular manga
				</h1>
				<HighlightSection data={data} mediaType="manga" />
			</section>
		</main>
	);
}
