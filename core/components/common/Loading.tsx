import Image from "next/image";

export default function Loading() {
	return (
		<div className="absolute inset-0 z-50 grid h-screen w-screen place-items-center bg-dark-900/80 backdrop-blur">
			<Image
				src="/loader.svg"
				width={200}
				height={200}
				quality={100}
				alt=""
				className="mb-2 h-36 w-36"
			/>
		</div>
	);
}
