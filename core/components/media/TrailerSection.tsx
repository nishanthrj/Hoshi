import Trailer from "@/components/media/Trailer";
import { getTrailer, getAnime } from "@/utils/fetch";
import { useMediaStore } from "@/stores/media";

export default async function TrailerSection() {
	const id = useMediaStore.getState().mediaId;
	const media = await getAnime(id);
	const data = await getTrailer(media.malId);

	return (
		<div>
			<h1 className="mb-4 text-lg font-semibold uppercase tracking-widest text-dark-100">
				Trailer
			</h1>
			<Trailer
				video={`https://www.youtube.com/embed/${data?.trailer?.youtube_id}`}
				thumbnail={`https://img.youtube.com/vi/${data?.trailer?.youtube_id}/maxresdefault.jpg`}
			/>
		</div>
	);
}
