"use client";

import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSupabase } from "@/supabase/provider";
import { checkUsername } from "@/utils/validation";
import ButtonLoading from "@/components/common/ButtonLoading";

export default function UsernameForm() {
	const { supabase } = useSupabase();

	const [username, setUsername] = useState<string>("");
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		const setSessionData = async () => {
			const { data } = await supabase.auth.getSession();
			setUsername(data.session?.user.user_metadata.username);
		};

		setSessionData();
	});

	const formik = useFormik({
		initialValues: {
			username: "",
		},

		validationSchema: Yup.object({
			username: Yup.string()
				.min(5, "Username must be at least 5 characters")
				.max(30, "Username must be at most 30 characters")
				.matches(/^\w+$/, "Username must be alphanumeric.")
				.required("Enter your username")
				.test(
					"usernameExists",
					"Username is already taken",
					async (value) => !(await checkUsername(value)),
				),
		}),

		onSubmit: async (values) => {
			await supabase.auth.updateUser({
				data: {
					username: values.username,
				},
			});
			await supabase.auth.refreshSession();
			setSuccess(true);
			setTimeout(() => window.location.reload(), 2000);
		},

		validateOnChange: false,
		validateOnBlur: false,
	});

	return (
		<div className="mt-20 w-[min(70rem,100%)] px-12 text-dark-100">
			<h1 className="mb-3 text-lg font-semibold uppercase tracking-normal text-dark-100">
				Username
			</h1>
			<form method="POST" className="flex flex-col" onSubmit={formik.handleSubmit}>
				{formik.errors.username && (
					<span className="-mt-2 mb-2  text-xs text-red-400">
						{formik.errors.username}
					</span>
				)}
				{success && (
					<span className="-mt-2 mb-2 text-xs text-green-400">
						Username updated successfully!
					</span>
				)}
				<input
					type="text"
					name="username"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					placeholder={username}
					value={formik.values.username}
					autoComplete="off"
					className="h-10 w-full rounded-md border-none bg-dark-600 p-3 text-sm font-bold text-dark-50 sm:w-1/2"
				/>
				<button
					type="submit"
					className="mt-8 flex h-12 w-52 items-center justify-center rounded-md border-none bg-dark-400 p-3 text-sm font-bold uppercase tracking-widest text-dark-50 transition-all duration-300 hover:brightness-125">
					{formik.isSubmitting && <ButtonLoading />}
					{formik.isSubmitting ? "Saving..." : "Save"}
				</button>
			</form>
		</div>
	);
}
