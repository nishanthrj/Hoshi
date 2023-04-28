import Image from "@/components/common/Image";

interface VoiceActorCardProps {
	charaName: string;
	voiceName: string;
	charaImage: string | null;
	voiceImage: string | null;
	charaRole: string;
	voiceRole: string;
}

export default function VoiceActorCard({
	charaName,
	voiceName,
	charaImage,
	voiceImage,
	charaRole,
	voiceRole,
}: VoiceActorCardProps) {
	return (
		<div className="grid grid-cols-2">
			<div className="grid h-24 grid-cols-[4.25rem_auto] gap-4 overflow-hidden rounded-l bg-dark-600 leading-5 text-dark-200">
				<div className="relative">
					<Image
						src={charaImage && !charaImage.includes("questionmark") ? charaImage : ""}
						fill={true}
						style={{ objectFit: "cover" }}
						quality={80}
						sizes="144px"
						alt="cover"
						unoptimized={true}
						className="rounded-sm"
					/>
				</div>
				<div className="flex flex-col gap-2 pt-3 capitalize">
					<p className="mt-1 line-clamp-2 text-dark-50 max-xs:text-xs">{charaName}</p>
					<p className="line-clamp-2 text-xs font-medium">{charaRole}</p>
				</div>
			</div>
			<div className="grid h-24 grid-cols-[auto_4.25rem] gap-4 overflow-hidden rounded-r bg-dark-600 leading-5 text-dark-200">
				<div className="flex flex-col gap-2 pt-3 capitalize">
					<p className="mt-1 line-clamp-2 text-right text-dark-50 max-xs:text-xs">
						{voiceName}
					</p>
					<p className="line-clamp-2 text-right text-xs font-medium">{voiceRole}</p>
				</div>
				<div className="relative">
					{(voiceName || voiceImage) && (
						<Image
							src={
								voiceImage && !voiceImage.includes("questionmark") ? voiceImage : ""
							}
							fill={true}
							style={{ objectFit: "cover" }}
							quality={80}
							sizes="144px"
							alt="cover"
							unoptimized={true}
							className="rounded-sm"
						/>
					)}
				</div>
			</div>
		</div>
	);
}
