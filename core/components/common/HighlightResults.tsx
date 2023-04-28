import MediaCard from "@/components/common/MediaCard";

interface HighlightResultsProps {
	mediaType: "anime" | "manga";
	data: Anime[] | Manga[];
}

export default function HighlightResults({ mediaType, data }: HighlightResultsProps) {
	return (
		<div className="my-8 grid w-full grid-cols-[repeat(auto-fill,minmax(min(26rem,100%),35rem))] justify-center gap-x-12 gap-y-8 overflow-hidden">
			{data?.map((media) => {
				let length = null;
				if ("runtime" in media) length = media.runtime as string;
				else if ("episodeCount" in media) length = media.episodeCount as number;
				else if ("chapterCount" in media) length = media.chapterCount as number;

				return (
					<MediaCard
						key={media._id}
						mediaType={mediaType}
						id={media._id}
						title={media.title}
						slug={media.slug}
						poster={media.poster}
						score={media.score ? Math.round(media.score) : null}
						format={media.type}
						length={length}
						status={media.status}
						genres={media.genres}
						synopsis={media.synopsis}
					/>
				);
			})}
		</div>
	);
}
