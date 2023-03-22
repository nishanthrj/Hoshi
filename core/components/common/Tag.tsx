interface TagProps {
	children: React.ReactNode;
	padding?: string;
	className?: string;
}

export default function Tag({ children, padding, className }: TagProps) {
	return (
		<span
			style={{
				padding: padding ? padding : "0.5rem",
			}}
			className={`select-none self-start whitespace-nowrap rounded bg-dark-400 text-xs leading-none text-dark-100 ${
				className ? className : ""
			}`}>
			{children}
		</span>
	);
}
