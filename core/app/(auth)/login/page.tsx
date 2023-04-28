import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LoginForm from "@/components/auth/LoginForm";

export const metadata: Metadata = {
	title: "Login",
};

export default async function Login() {
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
					Login
				</h1>
				<LoginForm />
				<p className="text-center text-dark-200">
					Not registered?
					<br className="hidden max-xs:block" />
					<Link
						href="/register"
						className="ml-1 font-bold text-dark-100 transition-all duration-300 hover:brightness-125">
						Create an account
					</Link>
				</p>
			</div>
		</main>
	);
}
