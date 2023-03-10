import { AiOutlineSwap } from "react-icons/ai";
import { useSearchStore } from "@/app/store";

export default function SearchHeader() {
	const mediaType = useSearchStore((state) => state.mediaType);
	const switchMediaType = useSearchStore((state) => state.switchMediaType);

	return (
		<header className="inline-flex select-none items-center gap-2 text-2xl font-bold text-dark-50">
			Search
			<span className="rounded-md bg-dark-600 px-4 py-2 capitalize">{mediaType}</span>
			<AiOutlineSwap
				className="cursor-pointer px-0 py-1 text-4xl text-dark-100"
				onClick={() => switchMediaType()}
			/>
		</header>
	);
}
