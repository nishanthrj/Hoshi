"use client";
import { useNavbarStore } from "@/stores/navbar";
import { Spiral as Hamburger } from "hamburger-react";

export default function NavIcon(): JSX.Element {
	const isOpen = useNavbarStore((state) => state.isOpen);
	const toggleNavbar = useNavbarStore((state) => state.toggleNavbar);

	return (
		<div className="absolute top-0 left-0 z-40 bg-transparent p-2 md:fixed">
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
