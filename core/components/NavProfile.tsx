"use client"

import Link from "next/link";
import Image from "next/image";
import { MdLogout } from "react-icons/md";
import { useNavbarStore } from "@/app/store";



export default function NavProfile() {
	const isOpen = useNavbarStore((state) => state.isOpen);

	return (
		<div className="flex pt-6 mt-auto mb-[6.5rem] border-t max-xs:justify-between justify-self-end border-dark-100/25">
			<div className="inline-flex pl-2 gap-3 font-semibold leading-[3rem] text-dark-100 hover:text-dark-100">
				<div className="relative w-10 h-10">
					<Image
						src='/guest.png'
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
				className="pt-[.85rem] max-xs:mr-5 ml-24 transition-colors duration-300 hover:text-dark-100"
			>
				<MdLogout
					className={`text-xl transition-opacity duration-300 ${
						isOpen ? "max-xs:opacity-100 delay-[700ms]" : "max-xs:opacity-0"
					}`}
				/>
			</Link>
		</div>
	);
}
