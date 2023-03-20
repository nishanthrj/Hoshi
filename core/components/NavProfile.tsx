"use client";

import Link from "next/link";
import Image from "next/image";
import { MdLogout } from "react-icons/md";
import { useNavbarStore } from "@/stores/navbar";

export default function NavProfile() {
	const isOpen = useNavbarStore((state) => state.isOpen);

	return (
		<div className="mt-auto mb-[6.5rem] flex justify-self-end border-t border-dark-100/25 pt-6 max-xs:justify-between">
			<div className="inline-flex gap-3 pl-2 font-semibold leading-[3rem] text-dark-100 hover:text-dark-100">
				<div className="relative h-10 w-10">
					<Image
						src="/guest.png"
						fill={true}
						quality={100}
						loading={"eager"}
						alt="profile"
						className="object-contain"
					/>
				</div>
				Guest
			</div>
			<Link
				href="/logout"
				className="ml-24 pt-[.85rem] transition-colors duration-300 hover:text-dark-100 max-xs:mr-5">
				<MdLogout
					className={`text-xl transition-opacity duration-300 ${
						isOpen ? "delay-[700ms] max-xs:opacity-100" : "max-xs:opacity-0"
					}`}
				/>
			</Link>
		</div>
	);
}
