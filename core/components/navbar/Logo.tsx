"use client";
import Link from "next/link";
import Image from "next/image";
import { useNavbarStore } from "@/stores/navbar";

export default function Logo() {
	const isOpen = useNavbarStore((state) => state.isOpen);

	return (
		<Link
			href="/"
			className={`flex justify-center pt-2 transition-opacity duration-500 ${
				isOpen ? "opacity-100 delay-[200ms]" : "opacity-0"
			}`}>
			<Image
				src="/logo.svg"
				width={120}
				height={72}
				quality={100}
				priority={true}
				alt="Hoshi Logo"
				className="h-[3.5rem] w-[5.5rem]"
			/>
		</Link>
	);
}
