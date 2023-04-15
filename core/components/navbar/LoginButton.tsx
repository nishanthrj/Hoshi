"use client";

import { MdLogin } from "react-icons/md";
import { useNavbarStore } from "@/stores/navbar";
import { signIn } from "next-auth/react";

export default function LoginButton() {
	const isOpen = useNavbarStore((state) => state.isOpen);

	return (
		<button
			className="ml-24 pt-[.85rem] transition-opacity duration-300 hover:text-dark-100 max-xs:mr-5"
			onClick={() => signIn()}>
			<MdLogin
				className={`text-xl transition-opacity duration-300 ${
					isOpen ? "delay-[700ms] max-xs:opacity-100" : "max-xs:opacity-0"
				}`}
			/>
		</button>
	);
}
