import DetailsCard from "@/components/media/DetailsCard";

export default function DetailsSection() {
	return (
		<div className="row-span-2">
			<h1 className="mb-4 text-lg font-semibold uppercase tracking-widest text-dark-100">
				Details
			</h1>
			<div className="w-[min(30rem,100%)] rounded-lg bg-dark-600 p-8 font-medium capitalize leading-9 text-dark-200">
				{/* @ts-expect-error Async Server Component */}
				<DetailsCard />
			</div>
		</div>
	);
}
