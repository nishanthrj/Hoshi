"use client";

import { getImageUrl } from "@/utils/common";
import Image from "next/image";
import { ImageProps } from "next/image";
import { useState } from "react";

export default function OImage({ src, unoptimized, sizes, quality, ...props }: ImageProps) {
	const [error, setError] = useState(false);

	let placeholder = "/placeholder.png";

	if (sizes) {
		const size = parseInt(sizes.slice(0, -2));
		placeholder = size >= 300 ? "/placeholderXL.png" : "/placeholder.png";
	}

	const image = unoptimized
		? src
		: getImageUrl(String(src), parseInt(sizes!.slice(0, -2)), Number(quality));

	return (
		<Image
			onError={() => setError(true)}
			src={!error ? image : placeholder}
			{...props}
			alt=""
			unoptimized={!error ? true : false}
		/>
	);
}
