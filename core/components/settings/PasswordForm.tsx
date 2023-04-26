"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSupabase } from "@/supabase/provider";
import ButtonLoading from "@/components/common/ButtonLoading";

export default function UsernameForm() {
	const { supabase } = useSupabase();

	const [success, setSuccess] = useState(false);

	const formik = useFormik({
		initialValues: {
			password: "",
			conpassword: "",
		},

		validationSchema: Yup.object({
			password: Yup.string()
				.min(8, "Password must be at least 8 characters")
				.required("Enter a password"),
			conpassword: Yup.string()
				.oneOf([Yup.ref("password")], "Passwords does not match")
				.required("Confirm your password"),
		}),

		onSubmit: async (values) => {
			await supabase.auth.updateUser({ password: values.password });
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
				Password
			</h1>
			<form method="POST" className="flex flex-col" onSubmit={formik.handleSubmit}>
				{(formik.errors.password || formik.errors.conpassword) && (
					<span className="-mt-2 mb-2  text-xs text-red-400">
						{formik.errors.password || formik.errors.conpassword}
					</span>
				)}
				{success && (
					<span className="-mt-2 mb-2 text-xs text-green-400">
						Password updated successfully!
					</span>
				)}
				<input
					type="password"
					name="password"
					placeholder="Enter new password"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.password}
					className="h-10 w-full rounded-md border-none bg-dark-600 p-3 text-sm font-bold text-dark-50 sm:w-1/2"
				/>
				<input
					type="password"
					name="conpassword"
					placeholder="Confirm new password"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.conpassword}
					className="mt-6 h-10 w-full rounded-md border-none bg-dark-600 p-3 text-sm font-bold text-dark-50 sm:w-1/2"
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
