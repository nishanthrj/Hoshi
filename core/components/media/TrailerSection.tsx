import Trailer from "@/components/media/Trailer";
import { getTrailer, getAnime } from "@/utils/fetch";
import { useMediaStore } from "@/stores/media";

export default async function TrailerSection() {
	const id = useMediaStore.getState().malId;
	const data = id ? await getTrailer(id) : null;

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
					D-Don't think I'm doing this for you (˶ •̀ _•́ ˶), but the trailer is not
					available.
				</p>
			)}
		</div>
	);
}
