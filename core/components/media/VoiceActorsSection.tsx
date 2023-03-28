import VoiceActorCard from "./VoiceActorCard";
import { getCharacters, getAnime } from "@/utils/fetch";
import { useMediaStore } from "@/stores/media";
import { v4 as uuid } from "uuid";

export default async function VoiceActorsSection() {
	const id = useMediaStore.getState().mediaId;
	const media = await getAnime(id);
	const data = await getCharacters(media.malId);

	return (
		<div className="mt-20 w-[min(70rem,100%)] pr-4 md:ml-5">
			<h1 className="mb-4 text-lg font-semibold uppercase tracking-widest text-dark-100">
				Voice Actors
			</h1>
			<div className="grid grid-cols-[repeat(auto-fill,min(32rem,100%))] gap-8 overflow-hidden">
				{data.map((chara: any) => {
					const va = {
						name: "",
						image: "",
						role: "",
					};
					for (const v of chara.voice_actors) {
						if (v.language !== "Japanese") continue;
						else {
							va.name = v?.person.name.replace(",", "");
							va.image = v?.person.images.jpg.image_url;
							va.role = v?.language;
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
		</div>
	);
}
