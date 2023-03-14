import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import SearchHeader from "@/components/SearchHeader";
import FilterField from "@/components/FilterField";

export default function Search() {
	return (
		<main className="mt-8 grid grid-cols-[min-content_auto]">
			<Navbar />
			<section className="mt-12 w-full pl-4">
				<SearchHeader />
				<div className="mt-14 grid w-full grid-cols-1 gap-x-4 gap-y-8 overflow-hidden xl:grid-cols-[auto_min-content]">
					<SearchBar />
					<div className="filters grid w-full grid-cols-[repeat(4,11rem)] gap-4 overflow-x-scroll pr-4">
						<FilterField name="genres" />
						<FilterField name="format" />
						<FilterField name="status" />
						<FilterField name="release" />
					</div>
				</div>
			</section>
		</main>
	);
}
