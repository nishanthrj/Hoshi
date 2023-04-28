"use client";

export default function Logout() {
	if (typeof window !== "undefined") {
		setTimeout(() => {
			window.location.href = "/";
		}, 1500);
	}

	return (
		<div className="absolute inset-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-dark-900/95 text-dark-100 backdrop-blur">
			<h1 className="text-3xl font-bold">Logged out successfully!</h1>
			<p className="mt-2 text-sm">You will be redirected to the home page shortly.</p>
		</div>
	);
}
