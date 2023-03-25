import RelationSection from "./RelationSection";
import CharactersSection from "./CharactersSection";
import DetailsSection from "./DetailsSection";
import TrailerSection from "./TrailerSection";
import StatsSection from "./StatsSection";
import RecommendedSection from "./RecommendedSection";

export default function OverviewTab() {
	return (
		<>
			<RelationSection />
			<CharactersSection />

			<div className="mt-20 grid w-[min(70rem,100%)] grid-cols-[repeat(auto-fill,30rem)] gap-x-20 gap-y-10 pr-4 md:ml-5">
				<DetailsSection />
				<div className="flex flex-col gap-y-10">
					<TrailerSection />
					<StatsSection />
				</div>
			</div>

			<RecommendedSection />
		</>
	);
}
