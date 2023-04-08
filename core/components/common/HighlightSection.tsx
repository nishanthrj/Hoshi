import MediaCard from "@/components/common/MediaCard";

interface HighlightSectionProps {
	mediaType: "anime" | "manga";
	data: Anime[] | Manga[];
}

export default function HighlightSection({ mediaType, data }: HighlightSectionProps) {
	return (
		<div className="my-8 grid w-full grid-cols-[repeat(auto-fill,minmax(min(26rem,100%),35rem))] justify-center gap-y-8 gap-x-12 overflow-hidden">
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
