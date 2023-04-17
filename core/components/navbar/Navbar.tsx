import { MdHome, MdSettings, MdSearch, MdPlayArrow, MdMenuBook, MdAutoGraph } from "react-icons/md";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import NavLink from "@/components/navbar/NavLink";
import NavProfile from "@/components/navbar/NavProfile";
import NavbarWrapper from "@/components/navbar/NavbarWrapper";
import LoginButton from "@/components/navbar/LoginButton";
import { useNavbarStore } from "@/stores/navbar";

export default async function Navbar() {
	const session = await getServerSession(authOptions);
	const path = useNavbarStore.getState().currentPath;

	if (path === "/login" || path === "/register") {
		return <div></div>;
	}
	return (
		<NavbarWrapper>
			<nav className="ml-2 mt-8 flex h-[85vh] flex-col whitespace-nowrap text-dark-200 transition-colors duration-300">
				<NavLink name="Home" path="/" Icon={MdHome} />
				<NavLink name="Search" path="/search" Icon={MdSearch} />
				<NavLink name="AnimeList" path="/user/animelist" Icon={MdPlayArrow} />
				<NavLink name="MangaList" path="/user/mangalist" Icon={MdMenuBook} />
				<NavLink name="Stats" path="/user/stats" Icon={MdAutoGraph} />
				<NavLink name="Settings" path="/user/settings" Icon={MdSettings} />
				{/* @ts-expect-error Async Server Component */}
				{session?.user ? <NavProfile /> : <LoginButton />}
			</nav>
		</NavbarWrapper>
	);
}
