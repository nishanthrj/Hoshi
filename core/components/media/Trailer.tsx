import Link from "next/link";
import MediaImage from "@/components/common/MediaImage";
import FancyBox from "@/components/common/FancyBox";

interface TrailerProps {
	video: string;
	thumbnail: string;
}

export default function Trailer({ video, thumbnail }: TrailerProps) {
	return (
		<>
			<FancyBox />

			<Link
				className="relative inline-block h-72 w-[min(30rem,100%)] overflow-hidden rounded bg-dark-600"
				data-fancybox
				prefetch={false}
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
