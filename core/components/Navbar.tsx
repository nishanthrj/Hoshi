"use client";

import Link from "next/link";
import Image from "next/image";

import {
	MdHome,
	MdSettings,
	MdExplore,
	MdSearch,
	MdPlayArrow,
	MdMenuBook,
	MdLogin,
	MdLogout,
	MdAutoGraph,
} from "react-icons/md";

import MenuIcon from "./MenuIcon";
import { useNavbarStore } from "@/app/store";

export default function Navbar() {
	const isOpen = useNavbarStore((state) => state.isOpen);
	const loggedIn = true;

	isOpen
		? document
				.querySelector("body")
				?.classList.add("overflow-y-hidden", "md:overflow-y-visible")
		: document
				.querySelector("body")
				?.classList.remove("overflow-y-hidden", "md:overflow-y-visible");

	return (
		<div className={`${isOpen ? "md:w-64" : "md:w-16"} md:transition-[width] md:duration-1000`}>
			<MenuIcon />
			<div
				className={`fixed top-0 left-0 font-sans ${
					isOpen ? "max-xs:w-full w-64" : "w-0 md:w-16"
				} min-h-screen overflow-hidden transition-[width] duration-1000 backdrop-blur border-r border-dark-100/25 bg-dark/75`}
			>
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
				<nav className="z-10 flex flex-col h-screen mt-8 ml-2 text-gray-400 transition-colors duration-300 whitespace-nowrap">
					<Link href="/">
						<span className="nav-link">
							<MdHome className="p-px text-3xl" />
							Home
						</span>
					</Link>
					<Link href="/search">
						<span className="nav-link">
							<MdSearch className="p-px text-3xl" />
							Search
						</span>
					</Link>
					<Link href="/explore">
						<span className="nav-link">
							<MdExplore className="p-px text-3xl" />
							Explore
						</span>
					</Link>

					{loggedIn ? (
						<>
							<Link href="/user/animelist">
								<span className="nav-link">
									<MdPlayArrow className="p-px text-3xl" />
									AnimeList
								</span>
							</Link>
							<Link href="/user/mangalist">
								<span className="nav-link">
									<MdMenuBook className="p-px text-3xl" />
									MangaList
								</span>
							</Link>
							<Link href="/user/stats">
								<span className="nav-link">
									<MdAutoGraph className="p-px text-3xl" />
									Stats
								</span>
							</Link>
							<Link href="/user/settings">
								<span className="nav-link">
									<MdSettings className="p-px text-3xl" />
									Settings
								</span>
							</Link>

							<div className="flex pt-6 mt-auto mb-20 border-t justify-self-end border-dark-100/25">
								<Link
									href="/login"
									className="gap-3 font-semibold leading-[3rem] nav-link"
								>
									<div className="relative w-10 h-10">
										<Image
											src="/profile.png"
											fill={true}
											loading={'eager'}
											alt="profile"
											className="object-contain"
										/>
									</div>
									Carbine
								</Link>
								<Link
									href="/logout"
									className="pt-[.85rem] ml-20 transition-colors duration-300 hover:text-gray-50"
								>
									<MdLogout className="text-xl" />
								</Link>
							</div>
						</>
					) : (
						<Link
							href="/login"
							className="pt-8 mt-auto mb-24 border-t justify-self-end border-dark-100/25"
						>
							<span className="nav-link">
								<MdLogin className="p-px text-3xl" />
								Login
							</span>
						</Link>
					)}
				</nav>
			</div>
		</div>
	);
}
