import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { notFound } from "next/navigation";
import { useMediaStore } from "@/stores/media";
import { getAnime } from "@/utils/fetch";
import MediaHeader from "@/components/media/MediaHeader";
import TabNavbar from "@/components/media/TabNavbar";
import Navbar from "@/components/navbar/Navbar";
import TabWrapper from "@/components/media/TabWrapper";
import OverviewTab from "@/components/media/OverviewTab";
import EpisodesTab from "@/components/media/EpisodesTab";
import StaffTab from "@/components/media/StaffTab";
import EpisodesTabWrapper from "@/components/media/EpisodesTabWrapper";
import ResetMediaPage from "@/components/media/ResetMediaPage";

interface AnimePageParams {
	params: {
		id: number;
		slug?: string[];
	};
}

export async function generateMetadata({ params }: AnimePageParams): Promise<Metadata> {
	const media = await getAnime(params.id);
	return { title: media.title };
}

export default async function Anime({ params }: AnimePageParams) {
	useMediaStore.setState({ mediaId: params.id });
	const media = await getAnime(params.id);
	const type = media.type === "Movie" ? "movie" : "anime";

	useMediaStore.setState({ malId: media.malId, kitsuId: media.kitsuId });

	if (!params.slug) {
		redirect(`/anime/${media._id}/${media.slug}`);
	}

	if (params.slug.length > 1) {
		notFound();
	}

	if (!media) {
		notFound();
	}

	return (
		<main className="grid grid-cols-[min-content_auto]">
			<Navbar />
			<ResetMediaPage />
			<section className="my-12 w-full pl-4">
				{/* @ts-expect-error Async Server Component */}
				<MediaHeader />
				<TabNavbar type={type} />
				<TabWrapper name="overview">
					<OverviewTab />
				</TabWrapper>
				{type === "anime" && (
					<TabWrapper name="episodes">
						<EpisodesTabWrapper>
							<EpisodesTab id={media.kitsuId} />
						</EpisodesTabWrapper>
					</TabWrapper>
				)}
				<TabWrapper name="staff">
					<StaffTab />
				</TabWrapper>
			</section>
		</main>
	);
}
