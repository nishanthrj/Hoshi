import Link from "next/link";
import { MdLogin } from "react-icons/md";

export default function LoginButton() {
	return (
		<Link
			href="/login"
			prefetch={false}
			className="mt-auto flex border-t border-dark-100/25 pt-6 max-xs:justify-between">
			<span className="mb-5 inline-flex cursor-pointer gap-5 pl-2 text-base font-medium leading-9 transition-colors duration-300 hover:text-dark-100">
				<MdLogin className="p-px text-3xl" />
				Login
			</span>
		</Link>
	);
}
