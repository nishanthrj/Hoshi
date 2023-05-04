import Link from "next/link";
import Image from "@/components/common/Image";
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
				className="relative block aspect-video w-[min(30rem,90vw)] overflow-hidden rounded bg-dark-600"
				data-fancybox
				prefetch={false}
				href={video}>
				<Image
					src={thumbnail}
					fill={true}
					style={{ objectFit: "cover" }}
					quality={80}
					sizes="640px"
					alt="cover"
					unoptimized={true}
					className="rounded-sm transition-all duration-300 hover:brightness-50"
				/>
			</Link>
		</>
	);
}
