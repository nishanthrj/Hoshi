import RelationCard from "@/components/media/RelationCard";
import CharacterCardMini from "@/components/media/CharacterCardMini";
import DetailsCard from "@/components/media/DetailsCard";
import Trailer from "@/components/media/Trailer";
import StatsCard from "@/components/media/StatsCard";
import RecommendedCard from "@/components/media/RecommendedCard";

export default function OverviewTab() {
	return (
		<>
			<div className="mt-20 w-[min(70rem,100%)] md:ml-5">
				<h1 className="mb-4 text-lg font-semibold uppercase tracking-widest text-dark-100">
					Relations
				</h1>
				<div className="grid grid-cols-[repeat(auto-fill,min(25rem,100%))] gap-8 overflow-hidden">
					<RelationCard />
					<RelationCard />
				</div>
			</div>

			<div className="mt-20 w-[min(70rem,100%)] pr-4 md:ml-5">
				<h1 className="mb-4 text-lg font-semibold uppercase tracking-widest text-dark-100">
					Characters
				</h1>
				<div className="flex flex-wrap gap-12">
					<CharacterCardMini />
					<CharacterCardMini />
					<CharacterCardMini />
					<CharacterCardMini />
					<CharacterCardMini />
					<CharacterCardMini />
				</div>
			</div>

			<div className="mt-20 grid w-[min(70rem,100%)] grid-cols-[repeat(auto-fill,30rem)] gap-x-20 gap-y-10 pr-4 md:ml-5">
				<div className="row-span-2">
					<h1 className="mb-4 text-lg font-semibold uppercase tracking-widest text-dark-100">
						Details
					</h1>
					<div className="w-[min(30rem,100%)] rounded-lg bg-dark-600 p-8 font-medium capitalize leading-9 text-dark-200">
						<DetailsCard />
					</div>
				</div>
				<div className="flex flex-col gap-y-10">
					<div>
						<h1 className="mb-4 text-lg font-semibold uppercase tracking-widest text-dark-100">
							Trailer
						</h1>
						<Trailer
							video="https://www.youtube.com/embed/1-o7fmQqSNg"
							thumbnail="https://img.youtube.com/vi/1-o7fmQqSNg/maxresdefault.jpg"
						/>
					</div>

					<div>
						<h1 className="mb-4 text-lg font-semibold uppercase tracking-widest text-dark-100">
							Stats
						</h1>
						<StatsCard />
					</div>
				</div>
			</div>

			<div className="mt-20 w-[min(70rem,100%)] pr-4 md:ml-5">
				<h1 className="mb-4 text-lg font-semibold uppercase tracking-widest text-dark-100">
					Recommended
				</h1>
				<div className="flex flex-wrap gap-8">
					<RecommendedCard />
					<RecommendedCard />
					<RecommendedCard />
					<RecommendedCard />
					<RecommendedCard />
					<RecommendedCard />
					<RecommendedCard />
					<RecommendedCard />
					<RecommendedCard />
					<RecommendedCard />
					<RecommendedCard />
					<RecommendedCard />
				</div>
			</div>
		</>
	);
}
