import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home",
};

export default function Home() {
	return (
		<main className="grid grid-cols-[min-content_auto]">
			<Navbar />
		</main>
	);
}
