"use client";

import { signIn } from "next-auth/react";
import { useRef } from "react";
import InputField from "./InputField";
import { useState } from "react";
import Loading from "../common/Loading";

export default function LoginForm() {
	const form = useRef<HTMLFormElement>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		const res = await signIn("credentials", {
			redirect: false,
			callbackUrl: "/",
			email: form.current?.email?.value,
			password: form.current?.password?.value,
		});

		if (res?.error) {
			setError(true);
			setLoading(false);
		} else {
			window.location.href = "/";
		}
	};

	return (
		<form method="POST" className="flex flex-col" ref={form} onSubmit={handleSubmit}>
			{loading && <Loading />}
			{error && (
				<span className="-mt-6 mb-4 flex justify-center text-xs text-red-400">
					Invalid credentials! Check your credentials and try again.
				</span>
			)}
			<InputField name="email" type="email" text="E-Mail" />
			<InputField name="password" type="password" text="Password" />
			<button
				type="submit"
				className="mb-8 mt-3 h-12 rounded-md border-none bg-dark-400 p-3 text-base font-bold uppercase tracking-widest text-dark-50 transition-all duration-300 hover:brightness-125">
				Login
			</button>
		</form>
	);
}
