import Link from "next/link";
import MediaImage from "../common/MediaImage";

export default function RelationCard() {
	return (
		<div className="grid h-32 grid-cols-[6rem_auto] gap-4 overflow-hidden rounded bg-dark-600 leading-5 text-dark-200 max-xs:h-24 max-xs:grid-cols-[5rem_auto]">
			<div className="relative">
				<MediaImage
					src="https://media.kitsu.io/anime/44196/poster_image/large-04fc7c066e52d4d2b9d0217b383597bb.jpeg"
					fill={true}
					style={{ objectFit: "cover" }}
					quality={100}
					sizes="96px"
					alt="cover"
					className="rounded-sm"
				/>
			</div>
			<div className="flex flex-col pt-3 pb-2 capitalize">
				<span className="text-xs font-medium">Adaptation</span>
				<Link href="" className="mt-1 text-dark-50 line-clamp-2 max-xs:text-sm">
					Bocchi the Rock!
				</Link>
				<span className="mt-auto text-xs font-medium">Manga • Ongoing</span>
			</div>
		</div>
	);
}
