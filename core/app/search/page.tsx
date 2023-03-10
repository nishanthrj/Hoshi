"use client";

import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import SearchHeader from "@/components/SearchHeader";

export default function Search() {
	return (
		<main className="grid grid-cols-[min-content_auto]">
			<Navbar />
			<section className="w-full p-4 mt-20">
				<SearchHeader />
				<div className="grid grid-cols-[repeat(auto-fit, 11rem)] gap-x-4 gap-y-8 w-full overflow-hidden">
					<SearchBar />
				</div>
			</section>
		</main>
	);
}
