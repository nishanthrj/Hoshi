import type { Metadata } from "next";
import Link from "next/link";
import { useNavbarStore } from "@/stores/navbar";
import LoginForm from "@/components/auth/LoginForm";

export const metadata: Metadata = {
	title: "Login",
};

export default async function Login() {
	useNavbarStore.setState({ currentPath: "/login" });

	return (
		<main className="flex h-screen w-full flex-col items-center justify-center p-4">
			<div className="w-[min(30rem,100%)] rounded-lg border border-dark-300 bg-dark-700 p-12 text-dark-100">
				<h1 className="mb-8 text-center text-2xl font-bold uppercase tracking-wider">
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
