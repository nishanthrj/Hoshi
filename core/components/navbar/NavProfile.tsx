import Image from "next/image";
import { getServerSession } from "next-auth/next";
import LogoutButton from "@/components/navbar/LogoutButton";
import LoginButton from "@/components/navbar/LoginButton";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/prisma/client";

export default async function NavProfile() {
	const session = await getServerSession(authOptions);
	let user = null;

	if (session) {
		user = await prisma.user.findUnique({
			where: {
				email: session?.user?.email,
			},
		});
	}

	return (
		<div className="mt-auto flex border-t border-dark-100/25 pt-6 max-xs:justify-between">
			<div className="inline-flex gap-3 pl-2 font-semibold leading-[3rem] text-dark-100 hover:text-dark-100">
				<div className="relative h-10 w-10">
					<Image
						src={user?.image || "/default.png"}
						fill={true}
						quality={100}
						loading={"eager"}
						alt="profile"
						className="object-contain"
					/>
				</div>
				{user?.username || "Guest"}
			</div>
			{session?.user ? <LogoutButton /> : <LoginButton />}
		</div>
	);
}
