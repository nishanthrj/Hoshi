import Link from "next/link";
import MediaImage from "@/components/common/MediaImage";

interface Trailer {
	video: string;
	thumbnail: string;
}

export default function Trailer({ video, thumbnail }: Trailer) {
	return (
		<>
			<Link
				className="relative inline-block h-72 w-[30rem] overflow-hidden rounded bg-dark-600"
				data-fancybox
				href={video}>
				<MediaImage
					src={thumbnail}
					fill={true}
					style={{ objectFit: "cover" }}
					quality={100}
					sizes="480px"
					alt="cover"
					className="rounded-sm transition-all duration-300 hover:brightness-50"
				/>
			</Link>
		</>
	);
}
