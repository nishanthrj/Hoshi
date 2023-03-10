"use client"

import Link from "next/link";
import Image from "next/image";
import { useNavbarStore } from "@/app/store";

export default function Logo() {
	const isOpen = useNavbarStore((state) => state.isOpen);

	return (
		<Link
			href="/"
			className={`flex justify-center transition-opacity duration-500 pt-2 ${
				isOpen ? "opacity-100" : "opacity-0"
			}`}
		>
			<Image
				src="/logo.svg"
				width={120}
				height={72}
				quality={100}
				priority={true}
				alt="Hoshi Logo"
				className="w-[5.5rem] h-[3.5rem]"
			/>
		</Link>
	);
}
