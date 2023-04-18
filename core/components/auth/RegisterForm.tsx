"use client";

import * as Yup from "yup";
import { useRouter } from "next/navigation";
import InputField from "./InputField";
import { useFormik } from "formik";
import { checkEmail, checkUsername } from "@/utils/validation";
import { useState } from "react";
import Loading from "../common/Loading";

export default function RegisterWrapper() {
	const router = useRouter();
	const [success, setSuccess] = useState(false);

	const formik = useFormik({
		initialValues: {
			username: "",
			email: "",
			password: "",
			conpassword: "",
			server: "",
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
			email: Yup.string()
				.email("Enter a valid email")
				.required("Enter your email")
				.test(
					"emailExists",
					"Account already exists.",
					async (value) => !(await checkEmail(value)),
				),
			password: Yup.string()
				.min(8, "Password must be at least 8 characters")
				.required("Enter a password"),
			conpassword: Yup.string()
				.oneOf([Yup.ref("password")], "Passwords does not match")
				.required("Confirm your password"),
		}),

		onSubmit: async (values, { setErrors, setSubmitting }) => {
			setSubmitting(true);
			const res = await fetch("/api/auth/register", {
				method: "POST",
				headers: {
					Accept: "application.json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(values),
			});

			if (res.status === 200) {
				setSuccess(true);
				setSubmitting(false);
				setTimeout(() => {
					router.push("/login");
				}, 3000);
			} else {
				setErrors({ server: "There seems to be a problem. Please try again." });
			}
		},

		validateOnChange: false,
		validateOnBlur: false,
	});

	return (
		<>
			{formik.isSubmitting && <Loading />}
			{success && (
				<div className="absolute inset-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-dark-900/95 backdrop-blur">
					<h1 className="text-3xl font-bold">Account created successfully!</h1>
					<p className="mt-2 text-sm">
						You will be redirected to the login page shortly.
					</p>
				</div>
			)}
			<form method="POST" className="flex flex-col" onSubmit={formik.handleSubmit}>
				<span className="-mt-6 mb-4 flex justify-center text-xs text-red-400">
					{formik.errors.server}
				</span>
				<InputField
					name="username"
					type="text"
					text="Username"
					value={formik.values.username}
					error={formik.touched.username ? formik.errors.username : ""}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				<InputField
					name="email"
					type="text"
					text="E-Mail"
					value={formik.values.email}
					error={formik.touched.email ? formik.errors.email : ""}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				<InputField
					name="password"
					type="password"
					text="Password"
					value={formik.values.password}
					error={formik.touched.password ? formik.errors.password : ""}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				<InputField
					name="conpassword"
					type="password"
					text="Confirm Password"
					value={formik.values.conpassword}
					error={formik.touched.conpassword ? formik.errors.conpassword : ""}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				<button
					type="submit"
					className="mb-8 mt-3 h-12 rounded-md border-none bg-dark-400 p-3 text-base font-bold uppercase tracking-widest text-dark-50 transition-all duration-300 hover:brightness-125">
					sign up
				</button>
			</form>
		</>
	);
}