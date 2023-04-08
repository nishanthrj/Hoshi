import { useMediaStore } from "@/stores/media";
import { getStats } from "@/utils/fetch";
import StatsCard from "@/components/media/StatsCard";

export default async function StatsSection() {
	const id = useMediaStore.getState().malId;
	const mediaType = useMediaStore.getState().mediaType;

	const data = id ? await getStats(mediaType, id) : null;

	return (
		<div>
			<h1 className="mb-4 text-lg font-semibold uppercase tracking-widest text-dark-100">
				Stats
			</h1>
			{data ? (
				<StatsCard
					completed={data?.completed || 0}
					planning={
						("plan_to_watch" in data && data?.plan_to_watch) ||
						("plan_to_read" in data && data?.plan_to_read) ||
						0
					}
					watching={"watching" in data ? data?.watching || 0 : undefined}
					reading={"reading" in data ? data?.reading || 0 : undefined}
					paused={data?.on_hold || 0}
					dropped={data?.dropped || 0}
					total={data?.total || 0}
				/>
			) : (
				<p className="pl-4 text-base font-normal text-dark-100">
					D-Don&apos;t think I&apos;m doing this for you (˶ •̀ _•́ ˶), but the stats is not
					available.
				</p>
			)}
		</div>
	);
}
