import { useMediaStore } from "@/stores/media";
import { getMedia } from "@/utils/fetch";
import RecommendedCard from "@/components/media/RecommendedCard";

export default async function RecommendedSection() {
	const id = useMediaStore.getState().mediaId;
	const mediaType = useMediaStore.getState().mediaType;

	const data = await getMedia(mediaType, id);

	return (
		<div className="mt-20 w-[min(70rem,100%)] pr-4 md:ml-5">
			<h1 className="mb-4 text-lg font-semibold uppercase tracking-widest text-dark-100">
				Recommended
			</h1>
			<div className="flex flex-wrap gap-8">
				{data.recommended.map((rec: RecommendedMedia) => (
					<RecommendedCard
						key={rec._id}
						id={rec._id}
						title={rec.title}
						slug={rec.slug}
						poster={rec.poster}
					/>
				))}
			</div>
		</div>
	);
}
