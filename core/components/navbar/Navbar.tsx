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
	const username = (session as CustomSession)?.user?.username;

	const path = useNavbarStore.getState().currentPath;

	if (path === "/login" || path === "/register") {
		return <div></div>;
	}
	return (
		<NavbarWrapper>
			<nav className="ml-2 mt-8 flex h-[85vh] select-none flex-col whitespace-nowrap text-dark-200 transition-colors duration-300">
				<NavLink name="Home" path="/" Icon={MdHome} />
				<NavLink name="Search" path="/search" Icon={MdSearch} />
				<NavLink
					name="AnimeList"
					path={`/${username}/animelist`}
					Icon={MdPlayArrow}
					disabled={!session?.user}
				/>
				<NavLink
					name="MangaList"
					path={`/${username}/mangalist`}
					Icon={MdMenuBook}
					disabled={!session?.user}
				/>
				<NavLink
					name="Stats"
					path={`/${username}/stats`}
					Icon={MdAutoGraph}
					disabled={!session?.user}
				/>
				<NavLink
					name="Settings"
					path="/settings"
					Icon={MdSettings}
					disabled={!session?.user}
				/>
				{/* @ts-expect-error Async Server Component */}
				{session?.user ? <NavProfile /> : <LoginButton />}
			</nav>
		</NavbarWrapper>
	);
}
