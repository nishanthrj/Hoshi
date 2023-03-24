import EpisodeCard from "@/components/media/EpisodeCard";

export default function OverviewTab() {
	return (
		<div className="mt-20 w-[min(70rem,100%)] pr-4 md:ml-5">
			<h1 className="mb-4 text-lg font-semibold uppercase tracking-widest text-dark-100">
				Episodes
			</h1>
			<div className="grid grid-cols-[repeat(auto-fill,21rem)] gap-8">
				<EpisodeCard />
				<EpisodeCard />
				<EpisodeCard />
				<EpisodeCard />
				<EpisodeCard />
				<EpisodeCard />
				<EpisodeCard />
				<EpisodeCard />
				<EpisodeCard />
				<EpisodeCard />
				<EpisodeCard />
				<EpisodeCard />
			</div>
		</div>
	);
}
