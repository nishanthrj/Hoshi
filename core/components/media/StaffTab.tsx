import StaffSection from "./StaffSection";
import VoiceActorsSection from "./VoiceActorsSection";
import { Suspense } from "react";

export default function StaffTab() {
	return (
		<>
			<Suspense fallback={<p>Loading...</p>}>
				{/* @ts-expect-error Async Server Component */}
				<VoiceActorsSection />
			</Suspense>
			<Suspense fallback={<p>Loading...</p>}>
				{/* @ts-expect-error Async Server Component */}
				<StaffSection />
			</Suspense>
		</>
	);
}
