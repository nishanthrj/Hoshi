import CharacterCard from "@/components/media/CharacterCard";
import { getCharacters } from "@/utils/fetch";
import { useMediaStore } from "@/stores/media";
import { v4 as uuid } from "uuid";

export default async function CharactersSection() {
	const id = useMediaStore.getState().malId;
	const mediaType = useMediaStore.getState().mediaType;
	const data = id ? await getCharacters(mediaType, id) : null;

	return (
		<div className="mt-20 w-[min(70rem,100%)] pr-4 md:ml-5">
			<h1 className="mb-4 text-lg font-semibold uppercase tracking-widest text-dark-100">
				Characters
			</h1>
			{data ? (
				<div className="flex flex-wrap gap-12">
					{data.slice(0, 6).map((chara: any) => {
						let va = "";

						if (mediaType !== "manga") {
							for (const v of chara.voice_actors) {
								if (v.language !== "Japanese") continue;
								else {
									va = v?.person.name.replace(",", "");
								}
							}
						}

						return (
							<CharacterCard
								key={uuid()}
								image={chara.character.images?.jpg?.image_url}
								character={chara.character.name.replace(",", "")}
								voice={va}
							/>
						);
					})}
				</div>
			) : (
				<p className="h-32 pl-4 text-base font-normal text-dark-100">
					D-Don't think I'm doing this for you (˶ •̀ _•́ ˶), but the characters info is not
					available.
				</p>
			)}
		</div>
	);
}
