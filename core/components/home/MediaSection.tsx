import Link from "next/link";
import MediaCard from "@/components/home/MediaCard";

interface MediaSectionProps {
	title: string;
	data?: any;
}

export default function MediaSection({ title, data }: MediaSectionProps) {
	return (
		<div className="mt-20 w-[min(70rem,100%)] pr-4 md:ml-5">
			<div className="flex items-center justify-between">
				<h1 className="mb-4 text-lg font-semibold uppercase tracking-normal text-dark-100">
					{title}
				</h1>
				<Link
					href="/anime/top"
					prefetch={false}
					className="pr-6 text-xs font-semibold text-dark-200 max-xs:hidden">
					View All
				</Link>
			</div>
			<div className="grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-4 overflow-hidden sm:grid-rows-[1fr_0] max-xs:grid-cols-[repeat(auto-fit,minmax(100px,1fr))]">
				<MediaCard
					id={0}
					title={"Bocchi the Rock"}
					slug={"bocchi-the-rock"}
					poster={
						"https://media.kitsu.io/anime/44196/poster_image/large-04fc7c066e52d4d2b9d0217b383597bb.jpeg"
					}
				/>
				<MediaCard
					id={0}
					title={"Bocchi the Rock"}
					slug={"bocchi-the-rock"}
					poster={
						"https://media.kitsu.io/anime/44196/poster_image/large-04fc7c066e52d4d2b9d0217b383597bb.jpeg"
					}
				/>
				<MediaCard
					id={0}
					title={"Bocchi the Rock"}
					slug={"bocchi-the-rock"}
					poster={
						"https://media.kitsu.io/anime/44196/poster_image/large-04fc7c066e52d4d2b9d0217b383597bb.jpeg"
					}
				/>
				<MediaCard
					id={0}
					title={"Bocchi the Rock"}
					slug={"bocchi-the-rock"}
					poster={
						"https://media.kitsu.io/anime/44196/poster_image/large-04fc7c066e52d4d2b9d0217b383597bb.jpeg"
					}
				/>
				<MediaCard
					id={0}
					title={"Bocchi the Rock"}
					slug={"bocchi-the-rock"}
					poster={
						"https://media.kitsu.io/anime/44196/poster_image/large-04fc7c066e52d4d2b9d0217b383597bb.jpeg"
					}
				/>
				<MediaCard
					id={0}
					title={"Bocchi the Rock"}
					slug={"bocchi-the-rock"}
					poster={
						"https://media.kitsu.io/anime/44196/poster_image/large-04fc7c066e52d4d2b9d0217b383597bb.jpeg"
					}
				/>
			</div>
		</div>
	);
}
