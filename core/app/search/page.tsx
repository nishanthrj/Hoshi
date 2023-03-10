"use client";

import Navbar from "@/components/Navbar";
import SearchHeader from "@/components/SearchHeader";

export default function Search() {
	return (
		<main className="grid grid-cols-[min-content_auto]">
			<Navbar />
			<section className="w-full p-4 mt-20">
				<SearchHeader />
			</section>
		</main>
	);
}
