import CharacterCard from "@/components/media/CharacterCard";
import { getCharacters, getAnime } from "@/utils/fetch";
import { useMediaStore } from "@/stores/media";
import { v4 as uuid } from "uuid";

export default async function CharactersSection() {
	const id = useMediaStore.getState().mediaId;
	const media = await getAnime(id);
	const data = await getCharacters(media.malId);

	return (
		<div className="mt-20 w-[min(70rem,100%)] pr-4 md:ml-5">
			<h1 className="mb-4 text-lg font-semibold uppercase tracking-widest text-dark-100">
				Characters
			</h1>
			<div className="flex flex-wrap gap-12">
				{data.slice(0, 6).map((chara: any) => {
					let va = "";

					for (const v of chara.voice_actors) {
						if (v.language !== "Japanese") continue;
						else {
							va = v?.person.name.replace(",", "");
						}
					}

					return (
						<CharacterCard
							key={uuid()}
							image={chara.character.images.jpg.image_url}
							character={chara.character.name.replace(",", "")}
							voice={va}
						/>
					);
				})}
			</div>
		</div>
	);
}
