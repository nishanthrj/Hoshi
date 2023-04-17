"use client";

import * as Yup from "yup";
import InputField from "./InputField";
import { useFormik } from "formik";
import { checkEmail, checkUsername } from "@/utils/validation";

export default function RegisterWrapper() {
	const formik = useFormik({
		initialValues: {
			username: "",
			email: "",
			password: "",
			conpassword: "",
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

		onSubmit: (values) => {
			console.log("Working!");
		},

		validateOnChange: false,
		validateOnBlur: false,
	});

	return (
		<form method="POST" className="flex flex-col" onSubmit={formik.handleSubmit}>
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
				className="mb-8 mt-3 h-12 rounded-md border-none bg-dark-400 p-3 text-lg font-bold text-dark-50 transition-all duration-300 hover:brightness-125">
				Register
			</button>
		</form>
	);
}
