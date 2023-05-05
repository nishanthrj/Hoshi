import { NextResponse } from "next/server";
import {
	getTrendingMedia,
	getPopularAnime,
	getPopularManga,
	getTopAnime,
	getTopManga,
	getTopManhwa,
	getCurrentSeason,
	getNextSeason,
} from "@/utils/fetch";

export async function GET() {
	const promises = [
		getTrendingMedia(),
		getPopularAnime(),
		getPopularManga(),
		getTopAnime(),
		getTopManga(),
		getTopManhwa(),
		getCurrentSeason(),
		getNextSeason(),
	];

	const results = await Promise.allSettled(promises);

	const data = results.map((result) => (result.status === "fulfilled" ? result.value : null));
	return NextResponse.json({ status: "ok" });
}
