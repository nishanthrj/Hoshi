"use client";

import { MdClose } from "react-icons/md";
import { useSearchStore } from "@/stores/search";
import Tag from "@/components/common/Tag";

export default function ClearAllButton() {
	const reset = useSearchStore((state) => state.reset);

	return (
		<span onClick={reset}>
			<Tag className="transition-colors duration-200 hover:text-rose-500">
				<span className="relative inline-flex max-h-2 w-16 gap-2">
					Clear All <MdClose className="absolute right-0 -bottom-[.2rem]" />
				</span>
			</Tag>
		</span>
	);
}
