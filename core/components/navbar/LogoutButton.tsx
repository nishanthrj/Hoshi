"use client";

import { MdLogout } from "react-icons/md";
import { useSupabase } from "@/supabase/provider";

export default function LogoutButton() {
	const { supabase } = useSupabase();

	const handleLogout = async () => {
		const { error } = await supabase.auth.signOut();

		if (error) {
			console.log(error);
		} else {
			window.location.href = "/logout";
		}
	};

	return (
		<button
			className="transition-opacity duration-300 hover:text-dark-100 max-xs:mr-5"
			onClick={handleLogout}>
			<MdLogout className="text-xl transition-opacity duration-300" />
		</button>
	);
}
