import StaffSection from "./StaffSection";
import VoiceActorsSection from "./VoiceActorsSection";
import { Suspense } from "react";

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
