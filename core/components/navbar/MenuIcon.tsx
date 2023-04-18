"use client";

import { Spiral as Hamburger } from "hamburger-react";
import { useNavbarStore } from "@/stores/navbar";

export default function MenuIcon(): JSX.Element {
	const isOpen = useNavbarStore((state) => state.isOpen);
	const toggleNavbar = useNavbarStore((state) => state.toggleNavbar);

	return (
		<div className="absolute left-0 top-0 z-40 bg-transparent p-2 md:fixed">
			<Hamburger
				toggled={isOpen}
				toggle={toggleNavbar}
				color="#9ca3af"
				size={30}
				direction="right"
			/>
		</div>
	);
}
