import { MdHome, MdSettings, MdSearch, MdPlayArrow, MdMenuBook, MdAutoGraph } from "react-icons/md";
import NavLink from "@/components/navbar/NavLink";
import NavProfile from "@/components/navbar/NavProfile";
import NavbarWrapper from "@/components/navbar/NavbarWrapper";
import LoginButton from "@/components/navbar/LoginButton";

export default async function Navbar() {
	return (
		<NavbarWrapper>
			<nav className="ml-2 mt-8 flex h-[85vh] select-none flex-col whitespace-nowrap text-dark-200 transition-colors duration-300">
				<NavLink name="Home" path="/" Icon={MdHome} />
				<NavLink name="Search" path="/search" Icon={MdSearch} />
				<NavLink name="AnimeList" path={`/user/animelist`} Icon={MdPlayArrow} />
				<NavLink name="MangaList" path={`/user/mangalist`} Icon={MdMenuBook} />
				<NavLink name="Stats" path={`/user/stats`} Icon={MdAutoGraph} />
				<NavLink name="Settings" path="/settings" Icon={MdSettings} />
				{/* @ts-expect-error Async Server Component */}
				<NavProfile />
			</nav>
		</NavbarWrapper>
	);
}
