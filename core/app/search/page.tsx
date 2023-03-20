import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SearchHeader from "@/components/SearchHeader";
import ActiveFilters from "@/components/ActiveFilters";
import SortField from "@/components/SortField";
import ResetSearchPage from "@/components/ResetSearchPage";
import SearchResults from "@/components/SearchResults";
import SearchPanel from "@/components/SearchPanel";
import SearchResultsWrapper from "@/components/SearchResultsWrapper";

export const metadata: Metadata = {
	title: "Search",
};

export default function Search() {
	return (
		<main className="mt-8 grid grid-cols-[min-content_auto]">
			<Navbar />
			<section className="mt-12 w-full pl-4">
				<SearchHeader />
				<SearchPanel />
				<div className="mt-[-22rem] grid grid-cols-1 gap-x-20 xl:mr-12 xl:grid-cols-[auto_min-content]">
					<ActiveFilters />
					<SortField />
				</div>
				<SearchResultsWrapper>
					<SearchResults />
				</SearchResultsWrapper>
			</section>
			<ResetSearchPage />
		</main>
	);
}
