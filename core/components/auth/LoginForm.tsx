"use client";

import { useRef, useState } from "react";
import InputField from "@/components/auth/InputField";
import Loading from "@/components/common/Loading";
import { useSupabase } from "@/supabase/provider";
import { useRouter } from "next/navigation";

export default function LoginForm() {
	const { supabase } = useSupabase();

	const router = useRouter();
	const form = useRef<HTMLFormElement>(null);

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		const { data, error } = await supabase.auth.signInWithPassword({
			email: form.current?.email.value,
			password: form.current?.password.value,
		});

		if (!error) {
			router.push("/");
		} else {
			setError(true);
			setLoading(false);
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
