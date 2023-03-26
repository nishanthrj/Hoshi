import Link from "next/link";
import MediaImage from "@/components/common/MediaImage";

interface RecommendedCardProps {
	id: number;
	slug: string;
	title: string;
	poster: string;
}

export default function RecommendedCard({ id, slug, title, poster }: RecommendedCardProps) {
	return (
		<div className="w-36 max-xs:w-32">
			<div className="relative h-[12.65rem] max-xs:h-[11.25rem]">
				<MediaImage
					src={poster}
					fill={true}
					style={{ objectFit: "cover" }}
					quality={100}
					sizes="200px"
					alt="cover"
					className="rounded-sm"
				/>
			</div>
			<Link
				href={`/${id}/${slug}`}
				prefetch={false}
				className="mt-2 text-sm font-semibold text-dark-100 line-clamp-2 max-xs:text-xs">
				{title}
			</Link>
		</div>
	);
}
