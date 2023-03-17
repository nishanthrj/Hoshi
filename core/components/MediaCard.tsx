"use client";
import Image from "next/image";
import Link from "next/link";
import { v4 as uuid } from "uuid";
import { useSearchStore } from "@/app/store";
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
}

export default function MediaCard({
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
}: MediaCardProps) {
	const mediaType = useSearchStore((state) => state.mediaType);

	return (
		<div className="grid h-64 grid-cols-[11.5rem_auto] overflow-hidden rounded-md bg-dark-600 text-sm font-medium text-dark-200 shadow">
			<div className="relative">
				<Image src={poster} fill={true} quality={100} alt="cover" />
			</div>
			<div className="h-[95%] w-full overflow-hidden p-4">
				<div className="flex w-full justify-between pr-2">
					<Link
						href={`/${mediaType}/${id}/${slug}`}
						className="w-4/5 break-words text-base text-dark-50">
						{title}
					</Link>
					<div className="flex items-center gap-x-2 text-[.9rem] font-semibold">
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
					{genres.map((genre) => (
						<span
							key={uuid()}
							className="rounded-md bg-dark-400 px-[.6rem] py-[.35rem] text-xs">
							{genre}
						</span>
					))}
				</div>
				<p className="synopsis mt-4 h-[7.5rem] overflow-hidden text-[.7rem] font-normal leading-[1.1rem] hover:overflow-auto">
					{synopsis}
				</p>
			</div>
		</div>
	);
}
