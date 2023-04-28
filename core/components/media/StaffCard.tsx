import Image from "@/components/common/Image";

interface StaffCardProps {
	name: string;
	image: string | null;
	role: string;
}

export default function StaffCard({ name, image, role }: StaffCardProps) {
	return (
		<div className="grid h-24 grid-cols-[4.25rem_auto] gap-4 overflow-hidden rounded bg-dark-600 pr-4 leading-5 text-dark-200">
			<div className="relative">
				<Image
					src={image && !image.includes("questionmark") ? image : ""}
					fill={true}
					style={{ objectFit: "cover" }}
					quality={80}
					sizes="144px"
					alt="cover"
					className="rounded-sm"
					unoptimized={true}
				/>
			</div>
			<div className="flex flex-col gap-2 pt-3 capitalize">
				<p className="mt-1 line-clamp-2 text-dark-50 max-xs:text-sm">{name}</p>
				<p className="line-clamp-2 text-xs font-medium">{role}</p>
			</div>
		</div>
	);
}
