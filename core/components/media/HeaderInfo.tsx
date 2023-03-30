import { v4 as uuid } from "uuid";
import { useMediaStore } from "@/stores/media";
import { getMedia } from "@/utils/fetch";
import Tag from "@/components/common/Tag";

export default async function HeaderInfo() {
	const id = useMediaStore.getState().mediaId;
	const mediaType = useMediaStore.getState().mediaType;

	const data = await getMedia(mediaType, id);

	let length;
	if ("runtime" in data) {
		length = data.runtime;
	} else if ("episodeCount" in data) {
		length = `${data.episodeCount} Episode${
			data.episodeCount && data.episodeCount > 1 ? "s" : ""
		}`;
	} else if ("chapterCount" in data) {
		length = `${data.chapterCount} Chapter${
			data.chapterCount && data.chapterCount > 1 ? "s" : ""
		}`;
	} else length = null;

	return (
		<div className="relative mt-2 w-[min(95%,60rem)] font-medium">
			<span className="text-[.8rem] text-dark-200 max-xs:hidden ">
				{"studio" in data && data.studio?.join(", ")}
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
				{data.genres?.sort().map((genre: string) => (
					<Tag key={uuid()}>{genre}</Tag>
				))}
			</div>
			<p className="mt-4 text-justify text-sm font-normal leading-6 text-dark-100 max-xs:mt-6 max-xs:text-xs ">
				{data.synopsis}
			</p>
		</div>
	);
}
