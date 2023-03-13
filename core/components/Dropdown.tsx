import DropdownOptions from "./DropdownOptions";

interface DropdownProps {
	name: string;
}

export default function Dropdown({ name }: DropdownProps) {
	return (
		<div className="dropdown z-40 mb-2 mt-4 h-80 w-44 select-none overflow-y-hidden rounded-md bg-dark-600 text-sm font-semibold transition-[height] duration-300 hover:overflow-y-scroll">
			<ul className="p-4">
				<DropdownOptions name={name} />
			</ul>
		</div>
	);
}
