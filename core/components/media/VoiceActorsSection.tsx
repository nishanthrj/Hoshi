import { v4 as uuid } from "uuid";
import { useMediaStore } from "@/stores/media";
import { getCharacters } from "@/utils/fetch";
import VoiceActorCard from "@/components/media/VoiceActorCard";

export default async function VoiceActorsSection() {
	const id = useMediaStore.getState().malId;
	const mediaType = useMediaStore.getState().mediaType;
	const data = id ? await getCharacters(mediaType, id) : null;

	return (
		<div className="mt-20 w-[min(70rem,100%)] pr-4 md:ml-5">
			<h1 className="mb-4 text-lg font-semibold uppercase tracking-widest text-dark-100">
				Voice Actors
			</h1>
			{data && mediaType !== "manga" ? (
				<div className="grid grid-cols-[repeat(auto-fill,min(32rem,100%))] gap-8 overflow-hidden">
					{data.map((chara: Character) => {
						const va = {
							name: "",
							image: "",
							role: "",
						};

						if (chara.voice_actors) {
							for (const v of chara.voice_actors) {
								if (v.language !== "Japanese") continue;
								else {
									va.name = v.person.name?.replace(",", "");
									va.image = v.person.images?.jpg.image_url || "";
									va.role = v?.language;
								}
							}
						}

						return (
							<VoiceActorCard
								key={uuid()}
								charaName={chara.character.name.replace(",", "")}
								voiceName={va.name}
								charaImage={chara.character.images.jpg.image_url}
								voiceImage={va.image}
								charaRole={chara.role}
								voiceRole={va.role}
							/>
						);
					})}
				</div>
			) : (
				<p className="h-40 pl-4 text-base font-normal text-dark-100">
					We can&apos;t find any voice actors for this media.
				</p>
			)}
		</div>
	);
}
