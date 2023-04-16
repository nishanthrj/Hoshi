"use client";

import { MdLogout } from "react-icons/md";
import { signOut } from "next-auth/react";
import { useNavbarStore } from "@/stores/navbar";

export default function LogoutButton() {
	const isOpen = useNavbarStore((state) => state.isOpen);

	return (
		<button
			className="ml-24 transition-opacity duration-300 hover:text-dark-100 max-xs:mr-5"
			onClick={() => signOut()}>
			<MdLogout
				className={`text-xl transition-opacity duration-300 ${
					isOpen ? "delay-[700ms] max-xs:opacity-100" : "max-xs:opacity-0"
				}`}
			/>
		</button>
	);
}
