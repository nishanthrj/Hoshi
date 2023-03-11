interface DropdownProps {
	title: string;
}

export default function Dropdown({ title }: DropdownProps) {
	return (
		<div className="dropdown z-40 mb-2 mt-4 h-80 w-44 cursor-pointer select-none overflow-y-hidden rounded-md bg-dark-600 text-sm font-semibold transition-[height] duration-300 hover:overflow-y-scroll">
			<ul className="p-4">
				<li className="mb-1 text-xs uppercase text-dark-300">{title}</li>
				<li className="inline-flex w-full items-center justify-between rounded p-2 text-dark-200 transition-all duration-150 hover:bg-dark-400 hover:text-dark-100"></li>
			</ul>
		</div>
	);
}
