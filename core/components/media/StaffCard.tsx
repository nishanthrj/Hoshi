import MediaImage from "../common/MediaImage";

interface StaffCardProps {
	name: string;
	image: string;
	role: string;
}

export default function StaffCard({ name, image, role }: StaffCardProps) {
	return (
		<div className="grid h-24 grid-cols-[4.25rem_auto] gap-4 overflow-hidden rounded bg-dark-600 leading-5 text-dark-200">
			<div className="relative">
				<MediaImage
					src={!image.includes("questionmark") ? image : ""}
					fill={true}
					style={{ objectFit: "cover" }}
					quality={100}
					sizes="150px"
					alt="cover"
					className="rounded-sm"
				/>
			</div>
			<div className="flex flex-col gap-2 pt-3 capitalize">
				<p className="mt-1 text-dark-50 line-clamp-2 max-xs:text-sm">{name}</p>
				<p className="text-xs font-medium line-clamp-2">{role}</p>
			</div>
		</div>
	);
}
