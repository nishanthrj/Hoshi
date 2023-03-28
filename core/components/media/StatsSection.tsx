import StatsCard from "@/components/media/StatsCard";
import { getStats } from "@/utils/fetch";
import { useMediaStore } from "@/stores/media";

export default async function StatsSection() {
	const id = useMediaStore.getState().malId;
	const data = id ? await getStats(id) : null;

	return (
		<div>
			<h1 className="mb-4 text-lg font-semibold uppercase tracking-widest text-dark-100">
				Stats
			</h1>
			{data ? (
				<StatsCard
					completed={data?.completed || 0}
					planning={data?.plan_to_watch || 0}
					watching={data?.watching || 0}
					paused={data?.on_hold || 0}
					dropped={data?.dropped || 0}
					total={data?.total || 0}
				/>
			) : (
				<p className="pl-4 text-base font-normal text-dark-100">
					D-Don't think I'm doing this for you (˶ •̀ _•́ ˶), but the stats is not available.
				</p>
			)}
		</div>
	);
}
