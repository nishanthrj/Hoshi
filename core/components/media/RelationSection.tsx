import RelationCard from "@/components/media/RelationCard";
import { getRelatedAnime } from "@/utils/fetch";
import { useMediaStore } from "@/stores/media";
import { v4 as uuid } from "uuid";

export default async function RelationSection() {
	const id = useMediaStore.getState().kitsuId;
	const data = id ? await getRelatedAnime(id) : null;

	return (
		<div className="mt-20 w-[min(70rem,100%)] md:ml-5">
			<h1 className="mb-4 text-lg font-semibold uppercase tracking-widest text-dark-100">
				Relations
			</h1>
			{data ? (
				<div className="grid grid-cols-[repeat(auto-fill,min(25rem,100%))] gap-8 overflow-hidden">
					{data.map((media: any) => (
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
					D-Don't think I'm doing this for you (˶ •̀ _•́ ˶), but there is no related media.
				</p>
			)}
		</div>
	);
}
