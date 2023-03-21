import type { Metadata } from "next";
import { useNavbarStore } from "@/stores/navbar";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
	title: "Home | Hoshi",
};

export default function Home() {
	useNavbarStore.setState({ currentPath: "/" });

	return (
		<main className="grid grid-cols-[min-content_auto]">
			<Navbar />
		</main>
	);
}
