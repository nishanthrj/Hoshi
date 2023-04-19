import { useMediaStore } from "@/stores/media";
import { getMedia } from "@/utils/fetch";
import MediaImage from "@/components/common/MediaImage";
import HeaderInfo from "@/components/media/HeaderInfo";
import ActionButton from "@/components/media/ActionButton";

export default async function MediaHeader() {
	const id = useMediaStore.getState().mediaId;
	const mediaType = useMediaStore.getState().mediaType;

	const data = await getMedia(mediaType, id);

	return (
		<header className="mt-4 flex h-max justify-center border-b border-dark-200 pb-4 text-dark-100 ">
			<div className="grid w-[min(70rem,100%)] grid-cols-1 gap-4 lg:grid-cols-[13rem_auto]">
				<div className="max-xs:flex max-xs:flex-col max-xs:items-center max-xs:justify-self-center max-xs:pr-4">
					<div className="relative h-[18.5rem] w-52 max-xs:h-[10.5rem] max-xs:w-[7.5rem] max-xs:text-center">
						<MediaImage
							src={data?.poster ? data.poster : ""}
							fill={true}
							style={{ objectFit: "cover" }}
							quality={100}
							sizes="400px"
							alt="cover"
							className="rounded-sm"
						/>
					</div>
					<ActionButton />
				</div>
				{/* @ts-expect-error Async Server Component */}
				<HeaderInfo />
			</div>
		</header>
	);
}
