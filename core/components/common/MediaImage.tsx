"use client";

import Image from "next/image";
import { ImageProps } from "next/image";
import { useState } from "react";

export default function MediaImage({ src, ...props }: ImageProps) {
	const [error, setError] = useState(false);
	let placeholder = "/placeholder.png";
	if (props.sizes) {
		const size = parseInt(props.sizes.slice(0, -2));
		placeholder = size >= 300 ? "/placeholderXL.png" : "/placeholder.png";
	}
	return <Image onError={() => setError(true)} src={!error ? src : placeholder} {...props} />;
}
