"use client";

import Link from "next/link";
import { MdLogout } from "react-icons/md";
import { useNavbarStore } from "@/stores/navbar";

export default function LogoutButton() {
	const isOpen = useNavbarStore((state) => state.isOpen);

	return (
		<Link
			href="/logout"
			className="ml-24 pt-[.85rem] transition-opacity duration-300 hover:text-dark-100 max-xs:mr-5">
			<MdLogout
				className={`text-xl transition-opacity duration-300 ${
					isOpen ? "delay-[700ms] max-xs:opacity-100" : "max-xs:opacity-0"
				}`}
			/>
		</Link>
	);
}
