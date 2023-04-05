import Link from "next/link";
import { v4 as uuid } from "uuid";
import { FaRegSmile, FaRegMeh, FaRegFrown } from "react-icons/fa";
import MediaImage from "@/components/common/MediaImage";
import Tag from "@/components/common/Tag";

interface MediaCardProps {
	mediaType: "anime" | "manga";
	id: number;
	title: string;
	slug: string;
	poster: string | null;
	score: number | null;
	format: string | null;
	length: string | number | null;
	status: string | null;
	genres: string[] | null;
	synopsis: string | null;
}

const formatLength = (mediaType: string, length: string | number): string => {
	if (typeof length === "number") {
		return `${length} ${mediaType === "anime" ? "Episode" : "Chapter"}${length > 1 ? "s" : ""}`;
	} else {
		return length;
	}
};

const formatScore = (score: number) => {
	if (score === 0) return;
	if (score >= 70) {
		return (
			<>
				<FaRegSmile className="mb-[.15rem] h-5 w-5 text-score-green" />
				<span>{score}%</span>
			</>
		);
	} else if (score >= 50) {
		return (
			<>
				<FaRegMeh className="mb-[.15rem] h-5 w-5 text-score-orange" />
				<span>{score}%</span>
			</>
		);
	} else {
		return (
			<>
				<FaRegFrown className="mb-[.15rem] h-5 w-5 text-score-red" />
				<span>{score}%</span>
			</>
		);
	}
};

export default function MediaCard({
	mediaType,
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
	return (
		<div className="grid h-60 grid-cols-[10.75rem_auto] overflow-hidden rounded-md bg-dark-600 text-sm font-medium text-dark-200 shadow">
			<div className="relative">
				<MediaImage
					src={poster ? poster : ""}
					fill={true}
					style={{ objectFit: "cover" }}
					quality={85}
					sizes="172px"
					alt="cover"
				/>
			</div>
			<div className="card-info h-56 w-full overflow-y-hidden p-4 pb-0 hover:overflow-y-auto">
				<div className="relative flex w-full justify-between pr-2">
					<Link
						href={`/${mediaType}/${id}/${slug}`}
						prefetch={false}
						className="w-4/5 break-words text-base text-dark-50 line-clamp-2">
						{title}
					</Link>
					<div className="absolute left-72 flex items-center gap-x-2 text-[.9rem] font-semibold">
						{score && formatScore(score)}
					</div>
				</div>
				<div className="mt-1 text-xs font-semibold capitalize ">
					<span>
						{format} {format && (length || status) && " • "}
						{length && formatLength(mediaType, length)} {length && status && " • "}
						{status}
					</span>
				</div>
				<div className="mt-3 flex w-full gap-2 text-dark-100">
					{genres?.slice(0, 4).map((genre) => (
						<Tag key={uuid()}>{genre}</Tag>
					))}
				</div>
				<p className="synopsis mt-4 text-[.7rem] font-normal leading-[1.6] line-clamp-5">
					{synopsis}
				</p>
			</div>
		</div>
	);
}
