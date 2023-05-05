import type { Metadata } from "next";
import SearchHeader from "@/components/search/SearchHeader";
import ActiveFilters from "@/components/search/ActiveFilters";
import SortField from "@/components/search/SortField";
import ResetSearchPage from "@/components/search/ResetSearchPage";
import SearchResults from "@/components/search/SearchResults";
import SearchPanel from "@/components/search/SearchPanel";
import SearchResultsWrapper from "@/components/search/SearchResultsWrapper";

export const metadata: Metadata = {
	title: "Search",
};

export default function Search() {
	return (
		<main className="mt-8">
			<section className="mt-12 w-full sm:pl-4">
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
