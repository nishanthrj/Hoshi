import StaffCard from "./StaffCard";
import { getStaff, getAnime } from "@/utils/fetch";
import { useMediaStore } from "@/stores/media";
import { v4 as uuid } from "uuid";

export default async function StaffSection() {
	const id = useMediaStore.getState().mediaId;
	const media = await getAnime(id);
	const data = await getStaff(media.malId);

	return (
		<div className="mt-20 w-[min(70rem,100%)] pr-4 md:ml-5">
			<h1 className="mb-4 text-lg font-semibold uppercase tracking-widest text-dark-100">
				Staff
			</h1>
			<div className="grid grid-cols-[repeat(auto-fill,min(21rem,100%))] gap-8 overflow-hidden">
				{data.map((staff: any) => (
					<StaffCard
						key={uuid()}
						name={staff.person.name.replace(",", "")}
						image={staff.person.images.jpg.image_url}
						role={staff.positions.join(", ")}
					/>
				))}
			</div>
		</div>
	);
}
