import Link from "next/link";
import MediaImage from "@/components/common/MediaImage";

interface MediaCardMiniProps {
	id: number;
	slug: string;
	title: string;
	poster: string | null;
}

export default function MediaCardMini({ id, slug, title, poster }: MediaCardMiniProps) {
	return (
		<div>
			<div className="relative aspect-[4/6]">
				<MediaImage
					src={poster ? poster : ""}
					fill={true}
					style={{ objectFit: "cover" }}
					quality={100}
					sizes="250px"
					alt="cover"
					className="rounded-sm"
				/>
			</div>
			<Link
				href={`/anime/${id}/${slug}`}
				prefetch={false}
				className="mt-2 line-clamp-2 text-sm font-semibold text-dark-100 max-xs:text-xs">
				{title}
			</Link>
		</div>
	);
}
