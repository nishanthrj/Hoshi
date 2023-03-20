import type { Metadata } from "next";
import "./globals.css";
import { Overpass } from "next/font/google";

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
			<body className="overflow-x-hidden bg-dark">{children}</body>
		</html>
	);
}
