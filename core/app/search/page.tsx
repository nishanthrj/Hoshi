"use client";

import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import SearchHeader from "@/components/SearchHeader";

export default function Search() {
	return (
		<main className="grid grid-cols-[min-content_auto]">
			<Navbar />
			<section className="mt-20 w-full p-4">
				<SearchHeader />
				<div className="grid-cols-[repeat(auto-fit, 11rem)] grid w-full gap-x-4 gap-y-8 overflow-hidden">
					<SearchBar />
				</div>
			</section>
		</main>
	);
}
