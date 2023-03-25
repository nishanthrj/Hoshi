import RecommendedCard from "@/components/media/RecommendedCard";

export default function RecommendedSection() {
	return (
		<div className="mt-20 w-[min(70rem,100%)] pr-4 md:ml-5">
			<h1 className="mb-4 text-lg font-semibold uppercase tracking-widest text-dark-100">
				Recommended
			</h1>
			<div className="flex flex-wrap gap-8">
				<RecommendedCard />
				<RecommendedCard />
				<RecommendedCard />
				<RecommendedCard />
				<RecommendedCard />
				<RecommendedCard />
				<RecommendedCard />
				<RecommendedCard />
				<RecommendedCard />
				<RecommendedCard />
				<RecommendedCard />
				<RecommendedCard />
			</div>
		</div>
	);
}
