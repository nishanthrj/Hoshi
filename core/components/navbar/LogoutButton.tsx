"use client";

import { MdLogout } from "react-icons/md";
import { useNavbarStore } from "@/stores/navbar";
import { useSupabase } from "@/supabase/provider";

export default function LogoutButton() {
	const { supabase } = useSupabase();

	const isOpen = useNavbarStore((state) => state.isOpen);

	const handleLogout = async () => {
		const { error } = await supabase.auth.signOut();

		if (error) {
			console.log(error);
		}
	};

	return (
		<button
			className="ml-24 transition-opacity duration-300 hover:text-dark-100 max-xs:mr-5"
			onClick={handleLogout}>
			<MdLogout
				className={`text-xl transition-opacity duration-300 ${
					isOpen ? "delay-[700ms] max-xs:opacity-100" : "max-xs:opacity-0"
				}`}
			/>
		</button>
	);
}
