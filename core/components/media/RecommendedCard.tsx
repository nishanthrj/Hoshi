import Link from "next/link";
import MediaImage from "@/components/common/MediaImage";

export default function RecommendedCard() {
	return (
		<div className="w-36 max-xs:w-32">
			<div className="relative h-[12.65rem] max-xs:h-[11.25rem]">
				<MediaImage
					src="https://media.kitsu.io/anime/44196/poster_image/large-04fc7c066e52d4d2b9d0217b383597bb.jpeg"
					fill={true}
					style={{ objectFit: "cover" }}
					quality={100}
					sizes="144px"
					alt="cover"
					className="rounded-sm"
				/>
			</div>
			<Link
				href=""
				className="mt-2 text-sm font-semibold text-dark-100 line-clamp-2 max-xs:text-xs">
				Bocchi the Rock!
			</Link>
		</div>
	);
}
