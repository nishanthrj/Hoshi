"use client";

import { useEffect } from "react";
import { useDropdownStore } from "@/stores/common";
import { useSearchStore } from "@/stores/search";

export default function ResetSearchPage() {
	const reset = useSearchStore((state) => state.reset);
	const setOpenDropdown = useDropdownStore((state) => state.setOpenDropdown);

	useEffect(() => {
		setOpenDropdown(null);
		reset();
	});

	return <></>;
}
