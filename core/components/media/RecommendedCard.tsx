import Link from "next/link";
import Image from "@/components/common/Image";

interface RecommendedCardProps {
	id: number;
	slug: string;
	title: string;
	poster: string | null;
}

export default function RecommendedCard({ id, slug, title, poster }: RecommendedCardProps) {
	return (
		<div className="w-36 max-xs:w-32">
			<div className="relative h-[12.65rem] max-xs:h-[11.25rem]">
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
				href={`/anime/${id}/${slug}`}
				prefetch={false}
				className="mt-2 line-clamp-2 text-sm font-semibold text-dark-100 max-xs:text-xs">
				{title}
			</Link>
		</div>
	);
}
