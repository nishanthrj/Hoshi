import StaffCard from "./StaffCard";

export default function StaffTab() {
	return (
		<div className="mt-20 w-[min(70rem,100%)] md:ml-5">
			<h1 className="mb-4 text-lg font-semibold uppercase tracking-widest text-dark-100">
				Staff
			</h1>
			<div className="grid grid-cols-[repeat(auto-fill,min(22rem,100%))] gap-8 overflow-hidden">
				<StaffCard />
				<StaffCard />
				<StaffCard />
			</div>
		</div>
	);
}
