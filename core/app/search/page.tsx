"use client";

import FilterField from "@/components/FilterField";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import SearchHeader from "@/components/SearchHeader";

export default function Search() {
	return (
		<main className="mt-8 grid grid-cols-[min-content_auto]">
			<Navbar />
			<section className="mt-12 w-full pl-4">
				<SearchHeader />
				<div className="mt-14 grid w-full grid-cols-[repeat(auto-fit,100%)] gap-x-4 gap-y-8 overflow-hidden xl:grid-cols-[auto_min-content] xl:pr-4">
					<SearchBar />
					<div className="grid w-full grid-cols-[repeat(4,11rem)] gap-4">
						<FilterField title="genres" />
						<FilterField title="subtype" />
						<FilterField title="status" />
						<FilterField title="season" />
					</div>
				</div>
			</section>
		</main>
	);
}
