import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { useNavbarStore } from "@/stores/navbar";
import PasswordResetForm from "@/components/auth/PasswordResetForm";

export const metadata: Metadata = {
	title: "Reset Password",
};

export default async function Login() {
	useNavbarStore.setState({ currentPath: "/reset-password" });

	return (
		<main className="flex w-full flex-col items-center justify-center p-4">
			<Link href="/" prefetch={false}>
				<Image
					src="/logo.svg"
					width={120}
					height={72}
					quality={100}
					priority={true}
					alt="Hoshi Logo"
					className="mb-2 h-[5.5rem] w-[7.5rem]"
				/>
			</Link>
			<div className="mb-12 mt-8 w-[min(30rem,100%)] rounded-lg border border-dark-300 bg-dark-700 p-12 text-dark-100">
				<h1 className="mb-8 text-center text-2xl font-light uppercase tracking-widest">
					Reset Password
				</h1>
				<PasswordResetForm />
			</div>
		</main>
	);
}
