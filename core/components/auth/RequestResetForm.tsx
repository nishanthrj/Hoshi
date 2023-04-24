"use client";

import { useRef, useState } from "react";
import InputField from "@/components/auth/InputField";
import Loading from "@/components/common/Loading";
import { useSupabase } from "@/supabase/provider";

export default function LoginForm() {
	const { supabase } = useSupabase();

	const form = useRef<HTMLFormElement>(null);

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		const { data, error } = await supabase.auth.resetPasswordForEmail(
			form.current?.email.value,
			{
				redirectTo: `${window.location.origin}/auth/reset-password`,
			},
		);

		if (!error) {
			setSuccess(true);
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
					There seems to be a problem. Please try again.
				</span>
			)}
			{success && (
				<div className="absolute inset-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-dark-900/95 backdrop-blur">
					<h1 className="text-3xl font-bold">Verify your email address</h1>
					<p className="mt-2 text-sm">
						We have sent a link to your email to verify your account.
					</p>
				</div>
			)}
			<InputField name="email" type="email" text="E-Mail" />
			<button
				type="submit"
				className="mb-4 mt-6 h-12 rounded-md border-none bg-dark-400 p-3 text-base font-bold uppercase tracking-widest text-dark-50 transition-all duration-300 hover:brightness-125">
				Send Reset Link
			</button>
		</form>
	);
}
