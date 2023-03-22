import { MdEdit } from "react-icons/md";

export default function ActionButton() {
	return (
		<div className="mt-4 w-52 overflow-hidden rounded bg-dark-600">
			<div className="flex justify-between">
				<button className="flex w-full items-center justify-center p-2 transition-colors duration-200">
					Add to List
				</button>
				<button className="flex items-center justify-center bg-dark-400 py-2 px-3 transition-colors duration-200">
					<MdEdit />
				</button>
			</div>
		</div>
	);
}
