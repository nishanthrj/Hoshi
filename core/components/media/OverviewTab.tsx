import { Suspense } from "react";
import RelationSection from "@/components/media/RelationSection";
import CharactersSection from "@/components/media/CharactersSection";
import DetailsSection from "@/components/media/DetailsSection";
import TrailerSection from "@/components/media/TrailerSection";
import StatsSection from "@/components/media/StatsSection";
import RecommendedSection from "@/components/media/RecommendedSection";

export default function OverviewTab() {
	return (
		<>
			<Suspense>
				{/* @ts-expect-error Async Server Component */}
				<RelationSection />
			</Suspense>
			<Suspense>
				{/* @ts-expect-error Async Server Component */}
				<CharactersSection />
			</Suspense>

			<div className="mt-20 grid w-[min(70rem,100%)] grid-cols-[repeat(auto-fill,min(30rem,100%))] gap-x-20 gap-y-10 pr-2 md:ml-5 max-xs:flex max-xs:flex-col max-xs:gap-x-0">
				<Suspense>
					<DetailsSection />
				</Suspense>
				<div className="flex flex-col gap-y-10">
					<Suspense>
						{/* @ts-expect-error Async Server Component */}
						<TrailerSection />
					</Suspense>
					<Suspense>
						{/* @ts-expect-error Async Server Component */}
						<StatsSection />
					</Suspense>
				</div>
			</div>
			<Suspense>
				{/* @ts-expect-error Async Server Component */}
				<RecommendedSection />
			</Suspense>
		</>
	);
}
