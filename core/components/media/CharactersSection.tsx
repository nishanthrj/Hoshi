import CharacterCardMini from "@/components/media/CharacterCardMini";

export default function CharactersSection() {
	return (
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
	);
}
