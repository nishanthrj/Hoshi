import RelationCard from "@/components/media/RelationCard";

export default function OverviewTab() {
	return (
		<div className="mt-20 w-full md:ml-5">
			<h1 className="mb-4 text-lg font-semibold uppercase tracking-widest text-dark-100">
				Relations
			</h1>
			<div className="grid grid-cols-[repeat(auto-fill,min(25rem,95%))] gap-8 overflow-hidden">
				<RelationCard />
				<RelationCard />
			</div>
		</div>
	);
}
