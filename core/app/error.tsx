"use client";

import Image from "next/image";

export default function Error() {
	return (
		<div className="flex h-screen w-screen flex-col items-center justify-center bg-dark p-4">
			<Image
				src="/error.png"
				width={500}
				height={500}
				quality={100}
				priority={true}
				alt=""
				className="h-64 w-64"
			/>
			<h1 className="mt-12 text-center text-lg font-semibold text-dark-100">
				The server is experiencing technical difficulties due to gravitational waves
			</h1>
			<p className="mt-4 text-sm font-bold uppercase text-dark-300">
				500: Internal server error
			</p>
		</div>
	);
}
