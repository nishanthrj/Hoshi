import MediaImage from "@/components/common/MediaImage";

interface CharacterCardProps {
	image: string | null;
	character: string;
	voice: string;
}

export default function CharacterCard({ image, character, voice }: CharacterCardProps) {
	return (
		<div className="w-32 max-xs:w-[7.5rem]">
			<div className="relative h-40 max-xs:h-[9.25rem]">
				<MediaImage
					src={image && !image.includes("questionmark") ? image : ""}
					fill={true}
					style={{ objectFit: "cover" }}
					quality={100}
					sizes="200px"
					alt="cover"
					className="rounded-sm"
				/>
			</div>
			<p className="mt-2 text-center text-sm font-semibold text-dark-100 max-xs:text-xs">
				{character}
			</p>
			<p className="text-center text-sm font-medium text-dark-200 max-xs:text-xs">{voice}</p>
		</div>
	);
}
