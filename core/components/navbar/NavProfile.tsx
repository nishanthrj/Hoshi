import Image from "next/image";
import LogoutButton from "@/components/navbar/LogoutButton";

export default async function NavProfile() {
	return (
		<div className="mt-auto flex border-t border-dark-100/25 pt-6 max-xs:justify-between">
			<div className="inline-flex gap-3 pl-2 font-semibold leading-[3rem] text-dark-100 hover:text-dark-100">
				<div className="relative h-10 w-10">
					<Image
						src={"/default.png"}
						fill={true}
						quality={100}
						loading={"eager"}
						alt="profile"
						className="object-contain"
					/>
				</div>
				Guest
			</div>
			<LogoutButton />
		</div>
	);
}
