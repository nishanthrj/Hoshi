import MediaHeader from "@/components/media/MediaHeader";
import TabNavbar from "@/components/media/TabNavbar";
import Navbar from "@/components/navbar/Navbar";
import TabWrapper from "@/components/media/TabWrapper";
import OverviewTab from "@/components/media/OverviewTab";
import EpisodesTab from "@/components/media/EpisodesTab";
import StaffTab from "@/components/media/StaffTab";

interface AnimePageParams {
	params: {
		id: number;
		slug?: string;
	};
}

export default function Anime({ params }: AnimePageParams) {
	return (
		<main className="grid grid-cols-[min-content_auto]">
			<Navbar />
			<section className="mt-12 w-full pl-4">
				<MediaHeader />
				<TabNavbar />
				<TabWrapper name="overview">
					<OverviewTab />
				</TabWrapper>
				<TabWrapper name="episodes">
					<EpisodesTab />
				</TabWrapper>
				<TabWrapper name="staff">
					<StaffTab />
				</TabWrapper>
			</section>
		</main>
	);
}
