"use client";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
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
				autoplay: false,
				speed: 1000,
			}}
			aria-label="Trending Media">
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
