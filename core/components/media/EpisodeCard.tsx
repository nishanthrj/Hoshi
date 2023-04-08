"use client";

import { forwardRef, Ref } from "react";
import MediaImage from "@/components/common/MediaImage";

interface EpisodeCardProps {
	title: string | null;
	number: number | null;
	image: string | null;
	ref: Ref<HTMLDivElement> | null;
}

const EpisodeCard = forwardRef<HTMLDivElement, EpisodeCardProps>(
	({ title, number, image }, ref) => {
		return (
			<div ref={ref} className="capitalize leading-5">
				<div className="relative h-[11.8rem] w-[21rem]">
					<MediaImage
						src={image ? image : ""}
						fill={true}
						style={{ objectFit: "cover" }}
						quality={100}
						sizes="336px"
						alt="cover"
						className="rounded"
					/>
				</div>
				<p className="mt-2 text-sm font-medium text-dark-300">Episode {number}</p>
				<p className="text-dark-100 line-clamp-2">{title}</p>
			</div>
		);
	},
);

EpisodeCard.displayName = "EpisodeCard";
export default EpisodeCard;
