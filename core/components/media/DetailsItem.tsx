interface DetailsItemProps {
	title: string;
	children: React.ReactNode;
}

export default function DetailsItem({ title, children }: DetailsItemProps) {
	return (
		<div className="grid grid-cols-[40%_60%] max-xs:flex max-xs:flex-col">
			{children && (
				<>
					<strong className="font-semibold text-dark-100 ">{title}</strong>
					<p className="line-clamp-2 max-xs:mb-4">{children}</p>
				</>
			)}
		</div>
	);
}
