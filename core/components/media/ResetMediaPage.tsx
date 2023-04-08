"use client";

import { useEffect } from "react";
import { useMediaStore } from "@/stores/media";

export default function ResetSearchPage() {
	const setActiveTab = useMediaStore((state) => state.setActiveTab);

	useEffect(() => {
		setActiveTab("overview");
	}, [setActiveTab]);

	return <></>;
}
