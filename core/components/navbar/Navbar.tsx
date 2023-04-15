import { MdHome, MdSettings, MdSearch, MdPlayArrow, MdMenuBook, MdAutoGraph } from "react-icons/md";
import { getServerSession } from "next-auth/next";
import NavLink from "./NavLink";
import NavProfile from "./NavProfile";
import NavbarWrapper from "./NavbarWrapper";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Navbar() {
	const session = await getServerSession(authOptions);
	return (
		<NavbarWrapper>
			<nav className="ml-2 mt-8 flex h-[85vh] flex-col whitespace-nowrap text-dark-200 transition-colors duration-300">
				<NavLink name="Home" path="/" Icon={MdHome} />
				<NavLink name="Search" path="/search" Icon={MdSearch} />
				{session?.user && (
					<>
						<NavLink name="AnimeList" path="/user/animelist" Icon={MdPlayArrow} />
						<NavLink name="MangaList" path="/user/mangalist" Icon={MdMenuBook} />
						<NavLink name="Stats" path="/user/stats" Icon={MdAutoGraph} />
						<NavLink name="Settings" path="/user/settings" Icon={MdSettings} />
					</>
				)}
				{/* @ts-expect-error Async Server Component */}
				<NavProfile />
			</nav>
		</NavbarWrapper>
	);
}
