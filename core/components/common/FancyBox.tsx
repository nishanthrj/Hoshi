"use client";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function FancyBox() {
	Fancybox.bind("[data-fancybox]", {
		Html: {
			videoAutoplay: false,
		},
	});
	return null;
}
