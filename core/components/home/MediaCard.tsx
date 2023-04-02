import Link from "next/link";
import MediaImage from "@/components/common/MediaImage";

interface MediaCardProps {
	id: number;
	slug: string;
	title: string;
	poster: string | null;
}

export default function MediaCard({ id, slug, title, poster }: MediaCardProps) {
	return (
		<div className="w-48 max-xs:w-32">
			<div className="relative h-[17rem] max-xs:h-[11.25rem]">
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
				className="mt-2 text-sm font-semibold text-dark-100 line-clamp-2 max-xs:text-xs">
				{title}
			</Link>
		</div>
	);
}
