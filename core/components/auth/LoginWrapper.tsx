import { signIn } from "next-auth/react";
import { useRef } from "react";

interface LoginWrapperProps {
	children: React.ReactNode;
}

export default function LoginWrapper({ children }: LoginWrapperProps) {
	const form = useRef<HTMLFormElement>(null);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await signIn("credentials", {
			redirect: true,
			callbackUrl: "/",
			email: form.current?.email?.value,
			password: form.current?.password?.value,
		});
	};

	return (
		<form method="POST" className="flex flex-col" ref={form} onSubmit={handleSubmit}>
			{children}
		</form>
	);
}
