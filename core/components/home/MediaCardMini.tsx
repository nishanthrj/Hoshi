import Link from "next/link";
import Image from "@/components/common/Image";

interface MediaCardMiniProps {
	id: number;
	slug: string;
	title: string;
	poster: string | null;
	mediaType: string;
}

export default function MediaCardMini({ id, slug, title, poster, mediaType }: MediaCardMiniProps) {
	return (
		<div>
			<div className="relative aspect-[4/6]">
				<Image
					src={poster ? poster : ""}
					fill={true}
					style={{ objectFit: "cover" }}
					quality={80}
					sizes="340px"
					alt="cover"
					className="rounded-sm"
				/>
			</div>
			<Link
				href={`/${mediaType}/${id}/${slug}`}
				prefetch={false}
				className="mt-2 line-clamp-2 text-sm font-semibold text-dark-100 max-xs:text-xs">
				{title}
			</Link>
		</div>
	);
}
