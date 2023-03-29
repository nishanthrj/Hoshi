import { v4 as uuid } from "uuid";
import { useMediaStore } from "@/stores/media";
import { getStaff } from "@/utils/fetch";
import StaffCard from "@/components/media/StaffCard";

export default async function StaffSection() {
	const id = useMediaStore.getState().malId;
	const data = id ? await getStaff(id) : null;

	return (
		<div className="mt-20 w-[min(70rem,100%)] pr-4 md:ml-5">
			<h1 className="mb-4 text-lg font-semibold uppercase tracking-widest text-dark-100">
				Staff
			</h1>
			{data ? (
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
			) : (
				<p className="pl-4 text-base font-normal text-dark-100">
					D-Don't think I'm doing this for you (˶ •̀ _•́ ˶), but the staff info is not
					available.
				</p>
			)}
		</div>
	);
}
