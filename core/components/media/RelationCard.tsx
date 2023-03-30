import Link from "next/link";
import MediaImage from "@/components/common/MediaImage";

interface RelationCardProps {
	id: number;
	type: string;
	title: string;
	poster: string | null;
	relation: string;
	format: string;
	status: string;
}

export default function RelationCard({
	id,
	type,
	title,
	poster,
	relation,
	format,
	status,
}: RelationCardProps) {
	return (
		<div className="grid h-32 grid-cols-[6rem_auto] gap-4 overflow-hidden rounded bg-dark-600 pr-4 leading-5 text-dark-200 max-xs:h-24 max-xs:grid-cols-[5rem_auto]">
			<div className="relative">
				<MediaImage
					src={poster ? poster : ""}
					fill={true}
					style={{ objectFit: "cover" }}
					quality={100}
					sizes="150px"
					alt="cover"
					className="rounded-sm"
				/>
			</div>
			<div className="flex flex-col pt-3 pb-2 capitalize">
				<span className="text-xs font-medium">{relation}</span>
				<Link
					href={`/${type}/relation/${id}`}
					prefetch={false}
					className="mt-1 text-dark-50 line-clamp-2 max-xs:text-sm">
					{title}
				</Link>
				<span className="mt-auto text-xs font-medium">
					{format} • {status}
				</span>
			</div>
		</div>
	);
}
