import Image from "next/image";
import LogoutButton from "@/components/navbar/LogoutButton";

interface NavProfileProps {
	username: string;
	avatar: string | null;
}

export default async function NavProfile({ username, avatar }: NavProfileProps) {
	return (
		<div className="mt-auto flex border-t border-dark-100/25 pt-6 max-xs:justify-between">
			<div className="inline-flex gap-3 pl-2 font-semibold leading-[3rem] text-dark-100 hover:text-dark-100">
				<div className="relative h-10 w-10">
					<Image
						src={avatar ? avatar : "/avatar.png"}
						fill={true}
						quality={100}
						loading={"eager"}
						alt="profile"
						sizes="50px"
						className="object-contain"
					/>
				</div>
				{username}
			</div>
			<LogoutButton />
		</div>
	);
}
