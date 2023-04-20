import { useMediaStore } from "@/stores/media";
import { getTrailer } from "@/lib/fetch";
import Trailer from "@/components/media/Trailer";

export default async function TrailerSection() {
	const id = useMediaStore.getState().malId;
	const mediaType = useMediaStore.getState().mediaType;

	const data = id ? await getTrailer(mediaType, id) : null;

	return (
		<div>
			<h1 className="mb-4 text-lg font-semibold uppercase tracking-widest text-dark-100">
				Trailer
			</h1>
			{data ? (
				<Trailer
					video={`https://www.youtube.com/embed/${data?.trailer?.youtube_id}`}
					thumbnail={`https://img.youtube.com/vi/${data?.trailer?.youtube_id}/maxresdefault.jpg`}
				/>
			) : (
				<p className="h-80 pl-4 text-base font-normal text-dark-100">
					We can&apos;t find the trailer for this media.
				</p>
			)}
		</div>
	);
}
