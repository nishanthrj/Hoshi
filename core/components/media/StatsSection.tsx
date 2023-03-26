import StatsCard from "@/components/media/StatsCard";
import { getStats, getAnime } from "@/utils/fetch";
import { useMediaStore } from "@/stores/media";

export default async function StatsSection() {
	const id = useMediaStore.getState().mediaId;
	const media = await getAnime(id);
	const data = await getStats(media.malId);

	return (
		<div>
			<h1 className="mb-4 text-lg font-semibold uppercase tracking-widest text-dark-100">
				Stats
			</h1>
			<StatsCard
				completed={data.completed}
				planning={data.plan_to_watch}
				watching={data.watching}
				paused={data.on_hold}
				dropped={data.dropped}
				total={data.total}
			/>
		</div>
	);
}
