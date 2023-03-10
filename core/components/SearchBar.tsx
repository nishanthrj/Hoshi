import { CgSearch } from "react-icons/cg";

export default function SearchBar() {
	return (
		<div className="mt-8 text-dark-100">
			<span className="font-medium">Search</span>
			<div className="mt-2 flex w-full items-center gap-2 rounded-md bg-dark-600 py-[.35rem] pl-3 text-dark-200 shadow">
				<CgSearch className="h-5 w-5" />
				<input
					type="text"
					autoComplete="off"
					placeholder="Search"
					className="w-full border-none bg-transparent py-[.35rem] text-sm font-medium tracking-wide outline-none placeholder:text-dark-300"
				/>
			</div>
		</div>
	);
}
