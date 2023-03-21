"use client";

import { useEffect } from "react";
import { useNavbarStore } from "@/stores/navbar";
import Logo from "./Logo";
import MenuIcon from "./NavIcon";

interface NavbarWrapperProps {
	children: React.ReactNode;
}

export default function NavbarWrapper({ children }: NavbarWrapperProps) {
	const isOpen = useNavbarStore((state) => state.isOpen);

	useEffect(() => {
		isOpen
			? document
					.querySelector("body")
					?.classList.add("overflow-y-hidden", "md:overflow-y-visible")
			: document
					.querySelector("body")
					?.classList.remove("overflow-y-hidden", "md:overflow-y-visible");
	}, [isOpen]);

	return (
		<div
			className={`z-[100] md:transition-[width] md:duration-1000 ${
				isOpen ? "md:w-64" : "md:w-16"
			}`}>
			<MenuIcon />
			<div
				className={`fixed top-0 left-0 min-h-screen overflow-hidden border-r border-dark-100/25 bg-dark/75 font-sans backdrop-blur transition-[width] duration-1000 ${
					isOpen ? "w-64 max-xs:w-full" : "w-0 md:w-16"
				}`}>
				<Logo />
				{children}
			</div>
		</div>
	);
}
