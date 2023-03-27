import RelationSection from "./RelationSection";
import CharactersSection from "./CharactersSection";
import DetailsSection from "./DetailsSection";
import TrailerSection from "./TrailerSection";
import StatsSection from "./StatsSection";
import RecommendedSection from "./RecommendedSection";
import { Suspense } from "react";

export default function OverviewTab() {
	return (
		<>
			<Suspense fallback={<p>Loading...</p>}>
				{/* @ts-expect-error Async Server Component */}
				<RelationSection />
			</Suspense>
			<Suspense fallback={<p>Loading...</p>}>
				{/* @ts-expect-error Async Server Component */}
				<CharactersSection />
			</Suspense>

			<div className="mt-20 grid w-[min(70rem,100%)] grid-cols-[repeat(auto-fill,30rem)] gap-x-20 gap-y-10 pr-4 md:ml-5">
				<Suspense fallback={<p>Loading...</p>}>
					<DetailsSection />
				</Suspense>
				<div className="flex flex-col gap-y-10">
					<Suspense fallback={<p>Loading...</p>}>
						{/* @ts-expect-error Async Server Component */}
						<TrailerSection />
					</Suspense>
					<Suspense fallback={<p>Loading...</p>}>
						{/* @ts-expect-error Async Server Component */}
						<StatsSection />
					</Suspense>
				</div>
			</div>
			<Suspense fallback={<p>Loading...</p>}>
				{/* @ts-expect-error Async Server Component */}
				<RecommendedSection />
			</Suspense>
		</>
	);
}
