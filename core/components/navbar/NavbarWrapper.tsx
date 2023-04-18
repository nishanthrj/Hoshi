"use client";

import { useEffect } from "react";
import { useNavbarStore } from "@/stores/navbar";
import Logo from "@/components/navbar/Logo";
import MenuIcon from "@/components/navbar/MenuIcon";
import { usePathname } from "next/navigation";

interface NavbarWrapperProps {
	children: React.ReactNode;
}

export default function NavbarWrapper({ children }: NavbarWrapperProps) {
	const pathname = usePathname();
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

	if (pathname === "/login" || pathname === "/register") {
		return <div></div>;
	}

	return (
		<div
			className={`z-[100] md:transition-[width] md:duration-1000 ${
				isOpen ? "md:w-64" : "md:w-16"
			}`}>
			<MenuIcon />
			<div
				className={`fixed left-0 top-0 min-h-full overflow-hidden border-r border-dark-100/25 bg-dark/75 font-sans backdrop-blur transition-[width] duration-1000 ${
					isOpen ? "w-64 max-xs:w-full" : "w-0 md:w-16"
				}`}>
				<Logo />
				{children}
			</div>
		</div>
	);
}
