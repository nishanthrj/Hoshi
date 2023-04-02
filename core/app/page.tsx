import type { Metadata } from "next";
import { useNavbarStore } from "@/stores/navbar";
import Navbar from "@/components/navbar/Navbar";
import MediaSection from "@/components/home/MediaSection";

export const metadata: Metadata = {
	title: "Home | Hoshi",
};

export default function Home() {
	useNavbarStore.setState({ currentPath: "/" });

	return (
		<main className="grid grid-cols-[min-content_auto]">
			<Navbar />
			<section className="mt-12 flex w-full flex-col items-center pl-4">
				<div></div>
				<div>
					<MediaSection title="popular this season" />
					<MediaSection title="upcoming next season" />
					<MediaSection title="highest rated anime" />
					<MediaSection title="most popular anime" />
				</div>
				<div>
					<MediaSection title="highest rated manga" />
					<MediaSection title="most popular manga" />
					<MediaSection title="most popular manhwa" />
				</div>
			</section>
		</main>
	);
}
