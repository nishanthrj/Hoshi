"use client";

import InputField from "./InputField";
import LoginWrapper from "./LoginWrapper";

export default function LoginForm() {
	return (
		<LoginWrapper>
			<InputField name="email" type="email" text="E-Mail" />
			<InputField name="password" type="password" text="Password" />
			<button
				type="submit"
				className="mb-8 mt-3 h-12 rounded-md border-none bg-dark-400 p-3 text-lg font-bold text-dark-50 transition-all duration-300 hover:brightness-125">
				Login
			</button>
		</LoginWrapper>
	);
}
