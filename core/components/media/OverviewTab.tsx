import Relation from "@/components/media/Relation";

export default function OverviewTab() {
	return (
		<div className="mt-20 ml-10 w-full">
			<h1 className="mb-4 text-xl font-semibold uppercase tracking-widest text-dark-100">
				Relations
			</h1>
			<div className="grid grid-cols-[repeat(auto-fill,30rem)] gap-8 overflow-hidden">
				<Relation />
				<Relation />
				<Relation />
				<Relation />
			</div>
		</div>
	);
}
