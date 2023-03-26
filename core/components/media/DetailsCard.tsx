import DetailsItem from "@/components/media/DetailsItem";
import { getAnime } from "@/utils/fetch";
import { useMediaStore } from "@/stores/media";
import { formatDate } from "@/utils/common";

export default async function DetailsCard() {
	const id = useMediaStore.getState().mediaId;
	const media = await getAnime(id);

	return (
		<>
			<DetailsItem title="English">{media.en}</DetailsItem>
			<DetailsItem title="Romaji">{media.enjp}</DetailsItem>
			<DetailsItem title="Native">{media.jp}</DetailsItem>
			<DetailsItem title="Format">{media.type}</DetailsItem>
			<DetailsItem title="Status">{media.status}</DetailsItem>
			<DetailsItem title="Source">{media.source}</DetailsItem>
			<DetailsItem title="Studio">{media.studio.join(", ")}</DetailsItem>
			<DetailsItem title="Episodes">{media.episodeCount}</DetailsItem>
			<DetailsItem title="Start Date">{formatDate(media.startDate)}</DetailsItem>
			<DetailsItem title="End Date">{formatDate(media.startDate)}</DetailsItem>
			<DetailsItem title="Season">{media.season}</DetailsItem>
			<DetailsItem title="Popularity">{media.popularity}</DetailsItem>
			<DetailsItem title="Score">{media.score}</DetailsItem>
			<DetailsItem title="Genres">{media.genres.sort().join(", ")}</DetailsItem>
			<DetailsItem title="Tags">{media.tags.sort().join(", ")}</DetailsItem>
		</>
	);
}
