import MediaHeader from "@/components/media/MediaHeader";
import TabNavbar from "@/components/media/TabNavbar";
import Navbar from "@/components/navbar/Navbar";

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
			</section>
		</main>
	);
}
