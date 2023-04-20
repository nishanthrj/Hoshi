import DetailsItem from "@/components/media/DetailsItem";
import { getMedia } from "@/lib/fetch";
import { useMediaStore } from "@/stores/media";
import { formatDate } from "@/lib/common";

export default async function DetailsCard() {
	const id = useMediaStore.getState().mediaId;
	const mediaType = useMediaStore.getState().mediaType;
	const data = await getMedia(mediaType, id);

	return (
		<>
			{data && (
				<>
					<DetailsItem title="English">{data.en}</DetailsItem>
					<DetailsItem title="Romaji">{data.enjp}</DetailsItem>
					<DetailsItem title="Native">{data.jp}</DetailsItem>
					<DetailsItem title="Format">{data.type}</DetailsItem>
					<DetailsItem title="Status">{data.status}</DetailsItem>
					<DetailsItem title="Source">{data.source}</DetailsItem>
					{"runtime" in data && <DetailsItem title="Runtime">{data.runtime}</DetailsItem>}
					{"episodeCount" in data && (
						<>
							<DetailsItem title="Season">{data.season}</DetailsItem>
							<DetailsItem title="Episodes">{data.episodeCount}</DetailsItem>
							<DetailsItem title="Studio">{data.studio?.join(", ")}</DetailsItem>
						</>
					)}
					{"chapterCount" in data && (
						<>
							<DetailsItem title="Chapters">{data.chapterCount}</DetailsItem>
							<DetailsItem title="Volumes">{data.volumeCount}</DetailsItem>
							<DetailsItem title="Publisher">
								{data.publisher?.join(", ")}
							</DetailsItem>
						</>
					)}
					<DetailsItem title="Start Date">
						{data.startDate && formatDate(data.startDate)}
					</DetailsItem>
					<DetailsItem title="End Date">
						{data.endDate && formatDate(data.endDate)}
					</DetailsItem>
					<DetailsItem title="Popularity">{data.popularity}</DetailsItem>
					<DetailsItem title="Score">{data.score}</DetailsItem>
					<DetailsItem title="Genres">{data.genres?.sort()?.join(", ")}</DetailsItem>
					<DetailsItem title="Tags">{data.tags?.sort()?.join(", ")}</DetailsItem>
				</>
			)}
		</>
	);
}
