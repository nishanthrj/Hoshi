import MediaImage from "@/components/common/MediaImage";
import HeaderInfo from "@/components/media/HeaderInfo";
import ActionButton from "@/components/media/ActionButton";

export default function MediaHeader() {
	return (
		<header className="mt-4 grid h-max grid-cols-1 flex-wrap gap-4 border-b border-dark-200 pb-4 text-dark-100 lg:grid-cols-[13rem_auto]">
			<div className="max-xs:flex max-xs:flex-col max-xs:items-center max-xs:justify-self-center max-xs:pr-4">
				<div className="relative h-[18.5rem] w-52 max-xs:h-[10.5rem] max-xs:w-[7.5rem] max-xs:text-center">
					<MediaImage
						src="https://media.kitsu.io/anime/44196/poster_image/large-04fc7c066e52d4d2b9d0217b383597bb.jpeg"
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
		</header>
	);
}
