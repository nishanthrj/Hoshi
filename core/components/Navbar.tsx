"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import {
	MdHome,
	MdSettings,
	MdExplore,
	MdSearch,
	MdPlayArrow,
	MdMenuBook,
	MdLogin,
	MdAutoGraph,
} from "react-icons/md";

import MenuIcon from "./NavIcon";
import NavLink from "./NavLink";
import NavProfile from "./NavProfile";
import Logo from "./Logo";

import { useNavbarStore } from "@/app/store";

export default function Navbar() {
	const pathname = usePathname();
	const isOpen = useNavbarStore((state) => state.isOpen);
	const closeNavbar = useNavbarStore((state) => state.closeNavbar);
	const loggedIn = true;

	useEffect(() => closeNavbar(), [pathname]);

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
		<div className={`md:transition-[width] md:duration-1000 ${isOpen ? "md:w-64" : "md:w-16"}`}>
			<MenuIcon />
			<div
				className={`fixed top-0 left-0 font-sans min-h-screen overflow-hidden transition-[width] duration-1000 backdrop-blur border-r border-dark-100/25 bg-dark/75 ${
					isOpen ? "max-xs:w-full w-64" : "w-0 md:w-16"
				}`}
			>
				<Logo />

				<nav className="text-dark-200 whitespace-nowrap z-10 flex flex-col h-screen mt-8 ml-2 transition-colors duration-300">
					<NavLink name="Home" path="/" Icon={MdHome} />
					<NavLink name="Search" path="/search" Icon={MdSearch} />
					<NavLink name="Explore" path="/explore" Icon={MdExplore} />

					{loggedIn ? (
						<>
							<NavLink name="AnimeList" path="/user/animelist" Icon={MdPlayArrow} />
							<NavLink name="MangaList" path="/user/mangalist" Icon={MdMenuBook} />
							<NavLink name="Stats" path="/user/stats" Icon={MdAutoGraph} />
							<NavLink name="Settings" path="/user/settings" Icon={MdSettings} />

							<NavProfile />
						</>
					) : (
						<NavLink name="Login" path="/login" Icon={MdLogin} />
					)}
				</nav>
			</div>
		</div>
	);
}
