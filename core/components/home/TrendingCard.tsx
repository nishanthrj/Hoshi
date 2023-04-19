import Link from "next/link";
import MediaImage from "@/components/common/MediaImage";
import Tag from "@/components/common/Tag";

interface TrendingCardProps {
	media: TrendingMedia;
	rank: number;
	type: "Anime" | "Manga";
}

export default function TrendingCard({ media, rank, type }: TrendingCardProps) {
	return (
		<div className="relative mx-auto grid h-96 w-[min(70rem,100%)] grid-cols-1 overflow-hidden rounded-lg bg-dark-700 sm:grid-cols-[60%_40%] max-xs:mt-12 max-xs:h-80">
			<div className="relative z-30 mt-2 w-full p-3 font-medium sm:ml-8 sm:w-11/12 max-xs:ml-0 max-xs:mt-3 max-xs:text-center">
				<span className="text-[.8rem] text-dark-100 sm:text-dark-200">
					<span className="text-sm font-semibold">#{rank}</span> Trending {type}
				</span>
				<Link
					href={`/${type.toLowerCase()}/relation?ext=mal&id=${media.idMal}`}
					prefetch={false}
					className="line-clamp-2 text-2xl font-semibold text-dark-50 max-xs:text-center">
					{media.title.romaji}
				</Link>
				<span className="absolute w-full text-xs text-dark-100 max-xs:relative max-xs:text-center">
					{media.format}{" "}
					{media.format && (media.averageScore || media.popularity) && " • "}
					{media.averageScore && `${media.averageScore}%`}{" "}
					{media.averageScore && media.popularity && " • "}
					{`${media.popularity.toLocaleString()} Users`}
				</span>
				<div className="mt-8 flex w-full gap-2 text-dark-100 max-xs:mt-4 max-xs:justify-center">
					{media.genres.slice(0, 3).map((genre) => (
						<Tag key={genre} className="max-xs:bg-opacity-75">
							{genre}
						</Tag>
					))}
				</div>
				<p className="mt-4 line-clamp-6 text-justify text-xs font-normal leading-5 text-dark-100 sm:text-sm sm:leading-6 max-xs:mt-6 max-xs:line-clamp-5 max-xs:text-xs">
					{media.description.replace(/<\/?[^>]+(>|$)/g, "")}
				</p>
			</div>
			<div className="absolute h-full w-full sm:relative">
				<div className="absolute aspect-[4/6] h-full w-full">
					<div className="absolute inset-0 z-50 hidden bg-gradient-to-r from-[#171520] opacity-100 sm:block"></div>

					<MediaImage
						src={media.coverImage.extraLarge || ""}
						fill={true}
						style={{ objectFit: "cover" }}
						quality={100}
						sizes="500px"
						alt="cover"
						priority={true}
						className="rounded-sm brightness-[25%] sm:brightness-[80%]"
					/>
				</div>
			</div>
		</div>
	);
}
