import MediaImage from "@/components/common/MediaImage";
import HeaderInfo from "@/components/media/HeaderInfo";
import ActionButton from "@/components/media/ActionButton";
import { getAnime } from "@/utils/fetch";
import { useMediaStore } from "@/stores/media";

export default async function MediaHeader() {
	const id = useMediaStore.getState().mediaId;
	const media = await getAnime(id);

	return (
		<header className="mt-4 flex h-max justify-center border-b border-dark-200 pb-4 text-dark-100 ">
			<div className="grid w-[min(70rem,100%)] grid-cols-1 gap-4 lg:grid-cols-[13rem_auto]">
				<div className="max-xs:flex max-xs:flex-col max-xs:items-center max-xs:justify-self-center max-xs:pr-4">
					<div className="relative h-[18.5rem] w-52 max-xs:h-[10.5rem] max-xs:w-[7.5rem] max-xs:text-center">
						<MediaImage
							src={media?.poster}
							fill={true}
							style={{ objectFit: "cover" }}
							quality={100}
							sizes="210px"
							alt="cover"
							className="rounded-sm"
						/>
					</div>
					<ActionButton />
				</div>
				<HeaderInfo />
			</div>
		</header>
	);
}
