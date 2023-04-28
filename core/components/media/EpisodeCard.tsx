"use client";

import { forwardRef, Ref } from "react";
import Image from "@/components/common/Image";

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
					<Image
						src={image ? image : ""}
						fill={true}
						style={{ objectFit: "cover" }}
						quality={80}
						sizes="672px"
						alt="cover"
						className="rounded"
					/>
				</div>
				<p className="mt-2 text-sm font-medium text-dark-300">Episode {number}</p>
				<p className="line-clamp-2 text-dark-100">{title}</p>
			</div>
		);
	},
);

EpisodeCard.displayName = "EpisodeCard";
export default EpisodeCard;
