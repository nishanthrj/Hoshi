"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import SearchHeader from "@/components/SearchHeader";
import FilterField from "@/components/FilterField";
import ActiveFilters from "@/components/ActiveFilters";
import SortField from "@/components/SortField";
import ResetSearchPage from "@/components/ResetSearchPage";
import SearchResults from "@/components/SearchResults";

const queryClient = new QueryClient();

export default function Search() {
	return (
		<main className="mt-8 grid grid-cols-[min-content_auto]">
			<Navbar />
			<section className="mt-12 w-full pl-4">
				<SearchHeader />
				<div className="mt-14 grid w-full grid-cols-1 gap-x-4 gap-y-5 overflow-hidden xl:grid-cols-[auto_min-content]">
					<SearchBar />
					<div className="filters grid w-full snap-x grid-cols-[repeat(5,11rem)] gap-4 overflow-x-auto pb-96 pr-4 xl:grid-cols-[repeat(4,11rem)]">
						<FilterField name="genres" />
						<FilterField name="format" />
						<FilterField name="status" />
						<FilterField name="release" />
						<div className="xl:hidden">
							<FilterField name="sort" />
						</div>
					</div>
				</div>
				<div className="mt-[-22rem] grid grid-cols-1 gap-x-20 xl:mr-12 xl:grid-cols-[auto_min-content]">
					<ActiveFilters />
					<SortField />
				</div>
				<QueryClientProvider client={queryClient}>
					<SearchResults />
					<ReactQueryDevtools />
				</QueryClientProvider>
			</section>
			<ResetSearchPage />
		</main>
	);
}
