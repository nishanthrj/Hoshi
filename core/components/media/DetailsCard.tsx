import DetailsItem from "@/components/media/DetailsItem";
import { getMedia } from "@/utils/fetch";
import { useMediaStore } from "@/stores/media";
import { formatDate } from "@/utils/common";

export default async function DetailsCard() {
	const id = useMediaStore.getState().mediaId;
	const mediaType = useMediaStore.getState().mediaType;
	const data = id ? await getMedia(mediaType, id) : null;

	return (
		<>
			<DetailsItem title="English">{data.en}</DetailsItem>
			<DetailsItem title="Romaji">{data.enjp}</DetailsItem>
			<DetailsItem title="Native">{data.jp}</DetailsItem>
			<DetailsItem title="Format">{data.type}</DetailsItem>
			<DetailsItem title="Status">{data.status}</DetailsItem>
			<DetailsItem title="Source">{data.source}</DetailsItem>
			{mediaType !== "manga" ? (
				mediaType === "movie" ? (
					<DetailsItem title="Runtime">{data.runtime}</DetailsItem>
				) : (
					<DetailsItem title="Episodes">{data.episodeCount}</DetailsItem>
				)
			) : (
				<>
					<DetailsItem title="Chapters">{data.chapterCount}</DetailsItem>
					<DetailsItem title="Volumes">{data.volumeCount}</DetailsItem>
				</>
			)}
			<DetailsItem title="Start Date">{formatDate(data.startDate)}</DetailsItem>
			<DetailsItem title="End Date">{formatDate(data.startDate)}</DetailsItem>
			{mediaType !== "manga" && <DetailsItem title="Season">{data.season}</DetailsItem>}
			{mediaType !== "manga" ? (
				<DetailsItem title="Studio">{data.studio?.join(", ")}</DetailsItem>
			) : (
				<DetailsItem title="Publisher">{data.publisher?.join(", ")}</DetailsItem>
			)}
			<DetailsItem title="Popularity">{data.popularity}</DetailsItem>
			<DetailsItem title="Score">{data.score}</DetailsItem>
			<DetailsItem title="Genres">{data.genres?.sort()?.join(", ")}</DetailsItem>
			<DetailsItem title="Tags">{data.tags?.sort()?.join(", ")}</DetailsItem>
		</>
	);
}
