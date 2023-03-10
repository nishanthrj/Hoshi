import {AiOutlineSwap} from "react-icons/ai";
import { useSearchStore } from "@/app/store";

export default function SearchHeader() {
	const mediaType = useSearchStore((state) => state.mediaType);
	const switchMediaType = useSearchStore((state) => state.switchMediaType);

	return (
		<header className="text-dark-50 inline-flex items-center gap-2 text-2xl font-bold select-none">
			Search
			<span className="bg-dark-600 px-4 py-2 capitalize rounded-md">{mediaType}</span>
			<AiOutlineSwap
				className="text-dark-100 px-0 py-1 text-4xl cursor-pointer"
				onClick={() => switchMediaType()}
			/>
		</header>
	);
}
