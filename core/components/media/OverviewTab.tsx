import RelationCard from "@/components/media/RelationCard";
import CharacterCardMini from "@/components/media/CharacterCardMini";
import DetailsCard from "@/components/media/DetailsCard";

export default function OverviewTab() {
	return (
		<>
			<div className="mt-20 w-full md:ml-5">
				<h1 className="mb-4 text-lg font-semibold uppercase tracking-widest text-dark-100">
					Relations
				</h1>
				<div className="grid grid-cols-[repeat(auto-fill,min(25rem,95%))] gap-8 overflow-hidden">
					<RelationCard />
					<RelationCard />
				</div>
			</div>

			<div className="mt-20 w-full pr-4 md:ml-5">
				<h1 className="mb-4 text-lg font-semibold uppercase tracking-widest text-dark-100">
					Characters
				</h1>
				<div className="flex flex-wrap gap-8">
					<CharacterCardMini />
					<CharacterCardMini />
					<CharacterCardMini />
					<CharacterCardMini />
				</div>
			</div>
		</>
	);
}
