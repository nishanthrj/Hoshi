"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons/lib";

interface NavLinkProp {
	name: string;
	path: string;
	Icon: IconType;
}

export default function NavLink({ name, path, Icon }: NavLinkProp) {
	const pathname = usePathname();

	return (
		<Link href={path}>
			<span
				className={`mb-5 inline-flex cursor-pointer gap-5 pl-2 text-base 
				font-medium leading-9 transition-colors duration-300 hover:text-dark-100 
				${pathname === path ? "text-dark-50" : ""}`}>
				<Icon className="p-px text-3xl" />
				{name}
			</span>
		</Link>
	);
}
