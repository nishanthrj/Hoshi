import MediaImage from "@/components/common/MediaImage";

export default function EpisodeCard() {
	return (
		<div className="capitalize leading-5">
			<div className="relative h-[11.8rem] w-[21rem]">
				<MediaImage
					src="https://media.kitsu.io/episode/335395/thumbnail/e6ce18389be362f85e67bb40ab90894c.jpg"
					fill={true}
					style={{ objectFit: "cover" }}
					quality={100}
					sizes="336px"
					alt="cover"
					className="rounded"
				/>
			</div>
			<p className="mt-2 text-sm font-medium text-dark-300">Episode 1</p>
			<p className="text-dark-100">Bocchi the Rock!</p>
		</div>
	);
}
