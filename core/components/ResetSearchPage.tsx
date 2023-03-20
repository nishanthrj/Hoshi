"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useDropdownStore } from "@/stores/common";
import { useSearchStore } from "@/stores/search";

export default function ResetSearchPage() {
	const pathname = usePathname();
	const reset = useSearchStore((state) => state.reset);
	const genres = useSearchStore((state) => state.genres);
	const setOpenDropdown = useDropdownStore((state) => state.setOpenDropdown);

	useEffect(() => {
		setOpenDropdown(null);
		reset();
	}, []);

	return <></>;
}
