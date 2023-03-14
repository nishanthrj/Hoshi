import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import SearchHeader from "@/components/SearchHeader";
import FilterField from "@/components/FilterField";
import ActiveFilters from "@/components/ActiveFilters";
import SortField from "@/components/SortField";

export default function Search() {
	return (
		<main className="mt-8 grid grid-cols-[min-content_auto]">
			<Navbar />
			<section className="mt-12 w-full pl-4">
				<SearchHeader />
				<div className="mt-14 grid w-full grid-cols-1 gap-x-4 gap-y-5 overflow-hidden xl:grid-cols-[auto_min-content]">
					<SearchBar />
					<div className="filters grid w-full grid-cols-[repeat(5,11rem)] gap-4 overflow-x-auto pr-4 xl:grid-cols-[repeat(4,11rem)]">
						<FilterField name="genres" />
						<FilterField name="format" />
						<FilterField name="status" />
						<FilterField name="release" />
						<div className="xl:hidden">
							<FilterField name="sort" />
						</div>
					</div>
				</div>
				<div className="grid grid-cols-1 gap-x-20 xl:mr-12 xl:grid-cols-[auto_min-content]">
					<ActiveFilters />
					<SortField />
				</div>
			</section>
		</main>
	);
}
