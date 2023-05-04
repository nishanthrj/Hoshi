import { v4 as uuid } from "uuid";
import { useMediaStore } from "@/stores/media";
import { getRelatedMedia } from "@/utils/fetch";
import RelationCard from "@/components/media/RelationCard";

export default async function RelationSection() {
	const id = useMediaStore.getState().kitsuId;
	const mediaType = useMediaStore.getState().mediaType;
	const data = id ? await getRelatedMedia(mediaType, id) : null;

	return (
		<div className="mt-20 w-[min(70rem,100%)] pr-2 md:ml-5">
			<h1 className="mb-4 text-lg font-semibold uppercase tracking-widest text-dark-100">
				Relations
			</h1>
			{data ? (
				<div className="grid grid-cols-[repeat(auto-fill,min(25rem,100%))] gap-8 overflow-hidden">
					{data.map((media: RelatedMedia) => (
						<RelationCard
							key={uuid()}
							id={media.id}
							type={media.type}
							title={media.title}
							poster={media.poster}
							relation={media.relation}
							format={media.format}
							status={media.status}
						/>
					))}
				</div>
			) : (
				<p className="h-32 pl-4 text-base font-normal text-dark-100">
					We can&apos;t find any related media.
				</p>
			)}
		</div>
	);
}
