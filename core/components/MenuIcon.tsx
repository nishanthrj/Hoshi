"use client";
import { Spiral as Hamburger } from "hamburger-react";


export default function MenuIcon(): JSX.Element {
	return (
		<div className="absolute top-0 left-0 z-40 p-2 bg-transparent md:fixed">
			<Hamburger color="#9ca3af" size={30} direction="right" />
		</div>
	);
}
