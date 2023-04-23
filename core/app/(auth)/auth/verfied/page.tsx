import { redirect } from "next/navigation";

export default function Verfified() {
	setTimeout(() => {
		redirect("/");
	}, 3000);

	return (
		<div className="absolute inset-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-dark-900/95 backdrop-blur">
			<h1 className="text-3xl font-bold">Account verified successfully!</h1>
			<p className="mt-2 text-sm">You will be redirected to the home page shortly.</p>
		</div>
	);
}
