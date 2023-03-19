"use client";
import Image from "next/image";
import Link from "next/link";
import { v4 as uuid } from "uuid";
import { useSearchStore } from "@/app/store";
import { forwardRef, Ref } from "react";
import { FaRegSmile, FaRegMeh, FaRegFrown } from "react-icons/fa";

interface MediaCardProps {
	id: number;
	title: string;
	slug: string;
	poster: string;
	score: number;
	format: string;
	length: string;
	status: string;
	genres: string[];
	synopsis: string;
	ref?: Ref<HTMLDivElement>;
}

const MediaCard = forwardRef<HTMLDivElement, MediaCardProps>(
	(
		{
			id,
			title,
			slug,
			poster,
			score,
			format,
			length,
			status,
			genres,
			synopsis,
		}: MediaCardProps,
		ref,
	) => {
		const mediaType = useSearchStore((state) => state.mediaType);

		return (
			<div
				ref={ref}
				className="grid h-60 grid-cols-[10.75rem_auto] overflow-hidden rounded-md bg-dark-600 text-sm font-medium text-dark-200 shadow">
				<div className="relative">
					<Image src={poster} fill={true} quality={100} alt="cover" />
				</div>
				<div className="card-info h-56 w-full overflow-y-hidden p-4 pb-0 hover:overflow-y-auto">
					<div className="relative flex w-full justify-between pr-2">
						<Link
							href={`/${mediaType}/${id}/${slug}`}
							className="w-4/5 break-words text-base text-dark-50 line-clamp-2">
							{title}
						</Link>
						<div className="absolute left-72 flex items-center gap-x-2 text-[.9rem] font-semibold">
							<FaRegSmile className="mb-[.15rem] h-5 w-5 text-extras-green" />
							<span>{score}%</span>
						</div>
					</div>
					<div className="mt-1 text-xs font-semibold capitalize ">
						<span>
							{format} • {length} • {status}
						</span>
					</div>
					<div className="mt-3 flex w-full gap-2 text-dark-100">
						{genres?.slice(0, 4).map((genre) => (
							<span
								key={uuid()}
								className="self-start whitespace-nowrap rounded-md bg-dark-400 px-[.6rem] py-[.35rem] text-xs">
								{genre}
							</span>
						))}
					</div>
					<p className="synopsis mt-4 text-[.7rem] font-normal leading-[1.6] line-clamp-5">
						{synopsis}
					</p>
				</div>
			</div>
		);
	},
);

export default MediaCard;
