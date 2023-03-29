import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { notFound } from "next/navigation";
import { useMediaStore } from "@/stores/media";
import { getManga } from "@/utils/fetch";
import MediaHeader from "@/components/media/MediaHeader";
import TabNavbar from "@/components/media/TabNavbar";
import Navbar from "@/components/navbar/Navbar";
import TabWrapper from "@/components/media/TabWrapper";
import OverviewTab from "@/components/media/OverviewTab";
import CharactersTab from "@/components/media/StaffTab";
import ResetMediaPage from "@/components/media/ResetMediaPage";

interface MangaPageParams {
	params: {
		id: number;
		slug?: string[];
	};
}

export async function generateMetadata({ params }: MangaPageParams): Promise<Metadata> {
	const media = await getManga(params.id);
	return { title: media.title };
}

export default async function Manga({ params }: MangaPageParams) {
	useMediaStore.setState({ mediaId: params.id });
	const media = await getManga(params.id);

	useMediaStore.setState({ malId: media.malId, kitsuId: media.kitsuId, mediaType: "manga" });

	if (!params.slug) {
		redirect(`/manga/${media._id}/${media.slug}`);
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
				<TabNavbar type={"manga"} />
				<TabWrapper name="overview">
					<OverviewTab />
				</TabWrapper>
				<TabWrapper name="characters">
					<CharactersTab />
				</TabWrapper>
			</section>
		</main>
	);
}
