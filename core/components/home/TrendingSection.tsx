"use client";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { MdArrowForward, MdArrowBack } from "react-icons/md";
import TrendingCard from "./TrendingCard";

export default function TrendingSection() {
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
			}}
			aria-label="Trending Media">
			<div className="splide__arrows">
				<MdArrowBack className="splide__arrow splide__arrow--prev text-xs text-dark-100" />
				<MdArrowForward className="splide__arrow splide__arrow--next text-xs text-dark-100" />
			</div>
			<SplideTrack>
				<SplideSlide>
					<TrendingCard />
				</SplideSlide>
				<SplideSlide>
					<TrendingCard />
				</SplideSlide>
			</SplideTrack>
		</Splide>
	);
}
