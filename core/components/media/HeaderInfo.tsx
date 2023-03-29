import { v4 as uuid } from "uuid";
import { useMediaStore } from "@/stores/media";
import { getMedia } from "@/utils/fetch";
import Tag from "@/components/common/Tag";

export const formatLength = (mediaType: string, media: any): string | null => {
	if (mediaType === "movie") {
		return media.runtime;
	} else if (mediaType === "anime") {
		return `${media.episodeCount} Episode${media.episodeCount > 1 ? "s" : ""}`;
	} else if (mediaType === "manga") {
		return `${media.chapterCount} Chapter${media.chapterCount > 1 ? "s" : ""}`;
	} else return null;
};

export default async function HeaderInfo() {
	const id = useMediaStore.getState().mediaId;
	const mediaType = useMediaStore.getState().mediaType;

	const data = id ? await getMedia(mediaType, id) : null;

	const length = formatLength(mediaType, data);

	return (
		<div className="relative mt-2 w-[min(95%,60rem)] font-medium">
			<span className="text-[.8rem] text-dark-200 max-xs:hidden ">
				{data.studio?.join(", ")}
			</span>
			<h1 className="text-xl font-semibold text-dark-50 line-clamp-2 max-xs:text-center">
				{data.title}
			</h1>
			<span className="absolute w-full text-xs text-dark-100 max-xs:text-center ">
				{data.type} {data.type && (length || data.status) && " • "}
				{length ? length : ""} {length && data.status && " • "}
				{data.status}
			</span>
			<div className="mt-8 flex w-full gap-2 text-dark-100 max-xs:justify-center">
				{data.genres.sort().map((genre: string) => (
					<Tag key={uuid()}>{genre}</Tag>
				))}
			</div>
			<p className="mt-4 text-justify text-sm font-normal leading-6 text-dark-100 max-xs:mt-6 max-xs:text-xs ">
				{data.synopsis}
			</p>
		</div>
	);
}
