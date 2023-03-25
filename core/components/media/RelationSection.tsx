import RelationCard from "@/components/media/RelationCard";

export default function RelationSection() {
	return (
		<div className="mt-20 w-[min(70rem,100%)] md:ml-5">
			<h1 className="mb-4 text-lg font-semibold uppercase tracking-widest text-dark-100">
				Relations
			</h1>
			<div className="grid grid-cols-[repeat(auto-fill,min(25rem,100%))] gap-8 overflow-hidden">
				<RelationCard />
				<RelationCard />
			</div>
		</div>
	);
}
