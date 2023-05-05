"use client";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { MdArrowForward, MdArrowBack } from "react-icons/md";
import { v4 as uuid } from "uuid";
import TrendingCard from "@/components/home/TrendingCard";

interface TrendingSectionProps {
	data: TrendingData | null;
}

export default function TrendingSection({ data }: TrendingSectionProps) {
	return (
		<Splide
			hasTrack={false}
			options={{
				type: "loop",
				rewind: true,
				gap: "1rem",
				perPage: 1,
				snap: true,
				autoplay: true,
				speed: 1000,
				lazyLoad: "nearby",
				preloadPages: 3,
			}}
			aria-label="Trending Media">
			<div className="splide__arrows max-xs:hidden">
				<MdArrowBack className="splide__arrow splide__arrow--prev left-[1%] top-[92%] text-center text-xs text-dark-100 sm:left-6" />
				<MdArrowForward className="splide__arrow splide__arrow--next right-[5%] top-[92%] text-center text-xs text-dark-100 sm:left-14" />
			</div>
			<SplideTrack>
				{data &&
					data.anime.map((media, i) => (
						<SplideSlide key={uuid()}>
							<TrendingCard media={media} rank={i + 1} type="Anime" />
						</SplideSlide>
					))}
				{data &&
					data.manga.map((media, i) => (
						<SplideSlide key={uuid()}>
							<TrendingCard media={media} rank={i + 1} type="Manga" />
						</SplideSlide>
					))}
			</SplideTrack>
		</Splide>
	);
}
