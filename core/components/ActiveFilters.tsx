import { AiFillTags } from "react-icons/ai";
export default function ActiveFilters() {
	return (
		<div className="flex items-center gap-4 text-sm font-semibold text-dark-200">
			<AiFillTags className="h-6 w-6" />
			<div className="flex w-full flex-wrap gap-2 overflow-hidden">
				<span className="select-none rounded bg-dark-400 p-2 text-xs leading-none text-dark-100">
					Search: Bocchi
				</span>
				<span className="select-none rounded bg-dark-400 p-2 text-xs leading-none text-dark-100">
					Music
				</span>
				<span className="select-none rounded bg-dark-400 p-2 text-xs leading-none text-dark-100">
					Completed
				</span>
				<span className="select-none rounded bg-dark-400 p-2 text-xs leading-none text-dark-100">
					Fall 2022
				</span>
			</div>
		</div>
	);
}
