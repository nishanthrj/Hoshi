import DetailsCard from "@/components/media/DetailsCard";

export default function DetailsSection() {
	return (
		<div className="row-span-2">
			<h1 className="mb-4 text-lg font-semibold uppercase tracking-widest text-dark-100">
				Details
			</h1>

			{/* @ts-expect-error Async Server Component */}
			<DetailsCard />
		</div>
	);
}
