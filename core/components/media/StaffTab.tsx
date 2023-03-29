import { Suspense } from "react";
import StaffSection from "@/components/media/StaffSection";
import VoiceActorsSection from "@/components/media/VoiceActorsSection";

export default function StaffTab() {
	return (
		<>
			<Suspense>
				{/* @ts-expect-error Async Server Component */}
				<VoiceActorsSection />
			</Suspense>
			<Suspense>
				{/* @ts-expect-error Async Server Component */}
				<StaffSection />
			</Suspense>
		</>
	);
}
