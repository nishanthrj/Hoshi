import "./globals.css";
import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
	title: {
		default: "Hoshi",
		template: "%s | Hoshi",
	},
};

const font = Overpass({
	weight: ["300", "400", "500", "600", "700", "800"],
	subsets: ["latin"],
	variable: "--font-overpass",
	display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${font.variable}`}>
			<body className="grid grid-cols-[min-content_auto] overflow-x-hidden bg-dark">
				{/* @ts-expect-error Async Server Component */}
				<Navbar />
				{children}
			</body>
		</html>
	);
}
