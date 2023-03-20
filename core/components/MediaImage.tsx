import { useState } from "react";
import Image from "next/image";
import { ImageProps } from "next/image";

export default function MediaImage({ src, ...props }: ImageProps) {
	const [error, setError] = useState(false);
	return (
		<Image onError={() => setError(true)} src={!error ? src : "/placeholder.png"} {...props} />
	);
}
