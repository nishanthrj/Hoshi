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
				completed={data?.completed || 0}
				planning={data?.plan_to_watch || 0}
				watching={data?.watching || 0}
				paused={data?.on_hold || 0}
				dropped={data?.dropped || 0}
				total={data?.total || 0}
			/>
		</div>
	);
}
