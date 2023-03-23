import MediaImage from "@/components/common/MediaImage";

export default function CharacterCardMini() {
	return (
		<div className="w-32 max-xs:w-[7.5rem]">
			<div className="relative h-40 max-xs:h-[9.25rem]">
				<MediaImage
					src="https://cdn.myanimelist.net/images/characters/8/491455.jpg"
					fill={true}
					style={{ objectFit: "cover" }}
					quality={100}
					sizes="128px"
					alt="cover"
					className="rounded-sm"
				/>
			</div>
			<p className="mt-2 text-center text-sm font-semibold text-dark-100 max-xs:text-xs">
				Gotoh Hitori
			</p>
			<p className="text-center text-sm font-medium text-dark-200 max-xs:text-xs">
				Aoyama Yoshino
			</p>
		</div>
	);
}
