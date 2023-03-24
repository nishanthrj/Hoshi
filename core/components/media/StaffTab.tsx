import StaffCard from "./StaffCard";
import VoiceActorCard from "./VoiceActorCard";

export default function StaffTab() {
	return (
		<>
			<div className="mt-20 w-[min(70rem,100%)] pr-4 md:ml-5">
				<h1 className="mb-4 text-lg font-semibold uppercase tracking-widest text-dark-100">
					Voice Actors
				</h1>
				<div className="grid grid-cols-[repeat(auto-fill,min(32rem,100%))] gap-8 overflow-hidden">
					<VoiceActorCard />
					<VoiceActorCard />
					<VoiceActorCard />
				</div>
			</div>
			<div className="mt-20 w-[min(70rem,100%)] pr-4 md:ml-5">
				<h1 className="mb-4 text-lg font-semibold uppercase tracking-widest text-dark-100">
					Staff
				</h1>
				<div className="grid grid-cols-[repeat(auto-fill,min(21rem,100%))] gap-8 overflow-hidden">
					<StaffCard />
					<StaffCard />
					<StaffCard />
				</div>
			</div>
		</>
	);
}