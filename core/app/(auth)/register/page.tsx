import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { useNavbarStore } from "@/stores/navbar";
import RegisterForm from "@/components/auth/RegisterForm";

export const metadata: Metadata = {
	title: "Register",
};

export default async function Register() {
	useNavbarStore.setState({ currentPath: "/register" });

	return (
		<main className="flex w-full flex-col items-center justify-center p-2">
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
			<div className="mb-12 w-[min(30rem,100%)] rounded-lg border border-dark-300 bg-dark-700 p-8 text-dark-100">
				<h1 className="mb-8 text-center text-2xl font-light uppercase tracking-widest">
					Sign up
				</h1>
				<RegisterForm />
				<p className="text-center text-dark-200">
					Already have an account?
					<br className="hidden max-xs:block" />
					<Link
						href="/login"
						className="ml-1 font-bold text-dark-100 transition-all duration-300 hover:brightness-125">
						Sign in
					</Link>
				</p>
			</div>
		</main>
	);
}
