interface DetailsItemProps {
	title: string;
	children: React.ReactNode;
}
export default function DetailsItem({ title, children }: DetailsItemProps) {
	return (
		<div className="grid grid-cols-[40%_60%]">
			<strong className="font-semibold text-dark-100">{title}</strong>
			<p className="line-clamp-2">{children}</p>
		</div>
	);
}
