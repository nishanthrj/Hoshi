import Link from "next/link";
import { IconType } from "react-icons/lib";

interface NavLinkProp {
	name: string;
	path: string;
	Icon: IconType;
	disabled?: boolean;
}

export default function NavLink({ name, path, Icon, disabled }: NavLinkProp) {
	return (
		<Link href={path} prefetch={false} className={disabled ? "pointer-events-none" : ""}>
			<span
				className={`mb-5 inline-flex cursor-pointer select-none gap-5 pl-2
				text-base font-medium leading-9 transition-colors duration-300 hover:text-dark-100
				${disabled ? "text-dark-400" : ""}`}>
				<Icon className="p-px text-3xl" />
				{name}
			</span>
		</Link>
	);
}
