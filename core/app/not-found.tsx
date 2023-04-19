import Image from "next/image";

export default function NotFound() {
	return (
		<div className="absolute inset-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-dark p-4">
			<Image
				src="/missing.png"
				width={500}
				height={500}
				quality={100}
				priority={true}
				alt=""
				className="h-64 w-64"
			/>
			<h1 className="mt-12 text-center text-lg font-semibold text-dark-100">
				It appears that you have stumbled across a page that is not part of our
				constellation.
			</h1>
			<p className="mt-4 text-sm font-bold uppercase text-dark-300">404: Page not found</p>
		</div>
	);
}
