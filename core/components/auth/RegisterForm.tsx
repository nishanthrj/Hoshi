"use client";

import InputField from "./InputField";

export default function RegisterWrapper() {
	return (
		<form method="POST" className="flex flex-col">
			<InputField name="username" type="text" text="Username" />
			<InputField name="email" type="email" text="E-Mail" />
			<InputField name="password" type="password" text="Password" />
			<InputField name="conpassword" type="password" text="Confirm Password" />
			<button
				type="submit"
				className="mb-8 mt-3 h-12 rounded-md border-none bg-dark-400 p-3 text-lg font-bold text-dark-50 transition-all duration-300 hover:brightness-125">
				Register
			</button>
		</form>
	);
}
