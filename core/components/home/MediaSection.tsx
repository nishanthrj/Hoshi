import Link from "next/link";
import MediaCard from "@/components/home/MediaCard";

interface MediaSectionProps {
	title: string;
	path: string;
	data: Anime[] | Manga[];
}

export default function MediaSection({ title, path, data }: MediaSectionProps) {
	return (
		<div className="mt-20 w-[min(70rem,100%)] pr-4 md:ml-5">
			<div className="flex items-center justify-between">
				<h1 className="mb-4 text-lg font-semibold uppercase tracking-normal text-dark-100">
					{title}
				</h1>
				<Link
					href={path}
					prefetch={false}
					className="pr-3 text-xs font-semibold text-dark-200 transition-colors duration-200 hover:text-dark-100 max-xs:hidden">
					View All
				</Link>
			</div>
			<div className="grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-4 overflow-hidden sm:grid-rows-[1fr_0] max-xs:grid-cols-[repeat(auto-fit,minmax(100px,1fr))]">
				{data &&
					data
						.slice(0, 6)
						.map((media) => (
							<MediaCard
								key={media._id}
								id={media._id}
								title={media.title}
								slug={media.slug}
								poster={media.poster}
							/>
						))}
			</div>
		</div>
	);
}
