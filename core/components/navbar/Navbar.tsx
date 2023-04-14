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
import NavLink from "./NavLink";
import NavProfile from "./NavProfile";
import NavbarWrapper from "./NavbarWrapper";

export default function Navbar() {
	const loggedIn = true;
	return (
		<NavbarWrapper>
			<nav className="ml-2 mt-8 flex h-screen flex-col whitespace-nowrap text-dark-200 transition-colors duration-300">
				<NavLink name="Home" path="/" Icon={MdHome} />
				<NavLink name="Search" path="/search" Icon={MdSearch} />
				{/* <NavLink name="Explore" path="/explore" Icon={MdExplore} /> */}

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
		</NavbarWrapper>
	);
}
