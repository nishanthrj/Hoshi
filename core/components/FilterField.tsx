import { MdExpandMore } from "react-icons/md";
import Dropdown from "./Dropdown";

interface FilterFieldProps {
	title: string;
}

export default function FilterField({ title }: FilterFieldProps) {
	return (
		<div>
			<span className="mb-1 ml-2 text-sm font-medium capitalize text-dark-100">{title}</span>
			<div className="flex items-center justify-between rounded-md bg-dark-600 py-[.45rem] px-3 text-dark-200 shadow">
				<span className="select-none p-1 text-sm font-medium tracking-wide text-dark-200">
					Any
				</span>
				<div className="hidden gap-1 font-medium">
					<span className="rounded bg-dark-400 p-2 text-xs leading-none text-dark-100"></span>
					<span className="rounded bg-dark-400 p-2 text-xs leading-none text-dark-100"></span>
				</div>
				<MdExpandMore className="h-5 w-5" />
			</div>
			<Dropdown title={title} />
		</div>
	);
}
