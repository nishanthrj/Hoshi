import type { Metadata } from "next";
import Link from "next/link";
import { useNavbarStore } from "@/stores/navbar";
import InputField from "@/components/common/InputField";

export const metadata: Metadata = {
	title: "Login",
};

export default function Login() {
	useNavbarStore.setState({ currentPath: "/login" });

	return (
		<main className="flex h-screen w-full flex-col items-center justify-center p-4">
			<div className="w-[min(30rem,100%)] rounded-lg border border-dark-300 bg-dark-700 p-12 text-dark-100">
				<h1 className="mb-8 text-center text-2xl font-bold uppercase tracking-wider">
					Login
				</h1>
				<form method="POST" className="flex flex-col">
					<InputField id="email" type="email" text="E-Mail" />
					<InputField id="password" type="password" text="Password" />
					<button
						type="submit"
						className="mb-8 mt-3 h-12 rounded-md border-none bg-dark-400 p-3 text-lg font-bold text-dark-50 transition-all duration-300 hover:brightness-125">
						Login
					</button>
				</form>
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
