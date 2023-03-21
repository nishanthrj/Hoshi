interface TagProps {
	children: React.ReactNode;
	padding?: string;
}

export default function Tag({ children, padding }: TagProps) {
	return (
		<span
			className={`select-none self-start whitespace-nowrap rounded bg-dark-400 text-xs leading-none text-dark-100 ${
				padding ? `p-[${padding}]` : "p-2"
			}`}>
			{children}
		</span>
	);
}
