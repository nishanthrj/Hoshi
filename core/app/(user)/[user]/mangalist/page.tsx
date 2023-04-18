import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function MangaList() {
	const session = await getServerSession(authOptions);

	if (session?.user)
		return (
			<div className="absolute inset-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-dark p-4">
				<Image
					src="/dev.png"
					width={500}
					height={500}
					quality={100}
					priority={true}
					alt=""
					className="h-64 w-64"
				/>
				<h1 className="mt-12 text-center text-xl font-bold text-dark-100">
					We&apos;re currently gathering cosmic materials to form this page.
				</h1>
			</div>
		);
	else {
		redirect("/");
	}
}