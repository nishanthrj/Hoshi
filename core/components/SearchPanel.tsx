import SearchBar from "@/components/SearchBar";
import FilterField from "@/components/FilterField";

export default function SearchPanel() {
	return (
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
	);
}
