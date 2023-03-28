import Tag from "@/components/common/Tag";
import { getAnime } from "@/utils/fetch";
import { useMediaStore } from "@/stores/media";
import { v4 as uuid } from "uuid";

export const formatLength = (mediaType: string, media: any): string | null => {
	if (mediaType === "Movie") {
		return media.runtime;
	} else {
		if (media.episodeCount)
			return `${media.episodeCount} Episode${
				media.episodeCount > 1 || media.chapterCount > 1 ? "s" : ""
			}`;
		else return null;
	}
};

export default async function HeaderInfo() {
	const id = useMediaStore.getState().mediaId;
	const media = await getAnime(id);
	const length = formatLength(media.type, media);

	return (
		<div className="relative mt-2 w-[min(95%,60rem)] font-medium">
			<span className="text-[.8rem] text-dark-200 max-xs:hidden ">
				{media.studio?.join(", ")}
			</span>
			<h1 className="text-xl font-semibold text-dark-50 line-clamp-2 max-xs:text-center">
				{media.title}
			</h1>
			<span className="absolute w-full text-xs text-dark-100 max-xs:text-center ">
				{media.type} {media.type && (length || media.status) && " • "}
				{length ? length : ""} {length && media.status && " • "}
				{media.status}
			</span>
			<div className="mt-8 flex w-full gap-2 text-dark-100 max-xs:justify-center">
				{media.genres.sort().map((genre: string) => (
					<Tag key={uuid()}>{genre}</Tag>
				))}
			</div>
			<p className="mt-4 text-justify text-sm font-normal leading-6 text-dark-100 max-xs:mt-6 max-xs:text-xs ">
				{media.synopsis}
			</p>
		</div>
	);
}
