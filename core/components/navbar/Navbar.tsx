import { MdHome, MdSettings, MdSearch, MdPlayArrow, MdMenuBook, MdAutoGraph } from "react-icons/md";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { headers, cookies } from "next/headers";
import { Database } from "@/types/db";
import NavLink from "@/components/navbar/NavLink";
import NavProfile from "@/components/navbar/NavProfile";
import NavbarWrapper from "@/components/navbar/NavbarWrapper";
import LoginButton from "@/components/navbar/LoginButton";

export default async function Navbar() {
	const supabase = createServerComponentSupabaseClient<Database>({
		headers,
		cookies,
	});

	const { data } = await supabase.auth.getSession();
	const username = data.session?.user.user_metadata.username;
	const avatar = data.session?.user.user_metadata.avatar;

	return (
		<NavbarWrapper>
			<nav className="ml-2 mt-8 flex h-[85vh] select-none flex-col whitespace-nowrap text-dark-200 transition-colors duration-300 max-xs:h-[80vh]">
				<NavLink name="Home" path="/" Icon={MdHome} />
				<NavLink name="Search" path="/search" Icon={MdSearch} />
				<NavLink
					name="AnimeList"
					path={`/user/${username}/animelist`}
					Icon={MdPlayArrow}
					disabled={!username ? true : false}
				/>
				<NavLink
					name="MangaList"
					path={`/user/${username}/mangalist`}
					Icon={MdMenuBook}
					disabled={!username ? true : false}
				/>
				<NavLink
					name="Stats"
					path={`/user/${username}/stats`}
					Icon={MdAutoGraph}
					disabled={!username ? true : false}
				/>
				<NavLink
					name="Settings"
					path="/settings"
					Icon={MdSettings}
					disabled={!username ? true : false}
				/>
				{/* @ts-expect-error Async Server Component */}
				{username ? <NavProfile username={username} avatar={avatar} /> : <LoginButton />}
			</nav>
		</NavbarWrapper>
	);
}
