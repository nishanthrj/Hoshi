export const genres: string[] = [
	"Action",
	"Adventure",
	"Comedy",
	"Drama",
	"Ecchi",
	"Fantasy",
	"Horror",
	"Mecha",
	"Music",
	"Mystery",
	"Psychological",
	"Romance",
	"Sci-Fi",
	"Slice of Life",
	"Sports",
	"Supernatural",
	"Thriller",
];

export const tags: string[] = [
	"Adult Cast",
	"Alien",
	"Android",
	"Angel",
	"Anthropomorphic",
	"Assassin",
	"Baseball",
	"Basketball",
	"Battle Royale",
	"Bishounen",
	"Boxing",
	"CGDCT",
	"Card Games",
	"Cars",
	"Coming Of Age",
	"Conspiracy",
	"Countryside",
	"Crime",
	"Crossdressing",
	"Cyberpunk",
	"Cyborg",
	"Cycling",
	"Dark Fantasy",
	"Delinquents",
	"Demons",
	"Detective",
	"Disaster",
	"Dragon",
	"Dystopia",
	"Educational",
	"Elf",
	"Friendship",
	"Future",
	"Game",
	"Genderbender",
	"Ghost",
	"Gore",
	"Gourmet",
	"Gunfights",
	"Harem",
	"Historical",
	"Idol",
	"Isekai",
	"Iyashikei",
	"Josei",
	"Kids",
	"Mafia",
	"Magic",
	"Mahou Shoujo",
	"Mahou Shounen",
	"Maid",
	"Martial Arts",
	"Mature",
	"Medical",
	"Mermaid",
	"Military",
	"Motorsport",
	"Musical Band",
	"Mythology",
	"Ninja",
	"Office Lady",
	"Organized Crime",
	"Otaku Culture",
	"Other Planet",
	"Parallel Universe",
	"Parody",
	"Performance",
	"Performing Arts",
	"Pets",
	"Pirate",
	"Police",
	"Political",
	"Post Apocalypse",
	"Racing",
	"Reincarnation",
	"Revenge",
	"Reverse Harem",
	"Robot",
	"Samurai",
	"School",
	"School Clubs",
	"Seinen",
	"Shoujo",
	"Shoujo Ai",
	"Shounen",
	"Shounen Ai",
	"Showbiz",
	"Slapstick",
	"Slavery",
	"Soccer",
	"Space",
	"Space Battles",
	"Space Travel",
	"Street Racing",
	"Super Power",
	"Superhero",
	"Surreal Humour",
	"Survival",
	"Suspense",
	"Swordplay",
	"Team Sports",
	"Tennis",
	"Time Travel",
	"Tragedy",
	"University",
	"Unrequited Love",
	"Vampire",
	"Video Game",
	"Violence",
	"Visual Arts",
	"Volleyball",
	"War",
	"Working Life",
	"Wrestling",
	"Zombies",
];

export const animeFormat: string[] = ["TV", "Movie", "OVA", "ONA", "Special"];
export const mangaFormat: string[] = [
	"Manga",
	"Manhwa",
	"Manhua",
	"Light Novel",
	"Doujin",
	"Oneshot",
	"OEL",
];

export const animeStatus: string[] = ["Finished", "Airing", "Not Yet Aired"];
export const mangaStatus: string[] = [
	"Finished",
	"Publishing",
	"Hiatus",
	"Cancelled",
	"Not Yet Published",
];

export const generateSeason = function (mediaType: string) {
	const currentYear: number = new Date().getFullYear();
	const currentMonth: number = new Date().getMonth();
	const startYear: number = 1940;
	const seasons: string[] = ["Fall", "Summer", "Spring", "Winter"];
	const data: string[] = [];

	if (mediaType === "anime") {
		for (let i = currentYear; i > startYear; i--) {
			data.push(...seasons.map((season) => `${season} ${i}`));
		}

		const extra: number = 3 - Math.floor(currentMonth) / 3 + 1;

		return data.slice(extra);
	} else {
		for (let i = currentYear; i > startYear; i--) {
			data.push(`${i}`);
		}

		return data;
	}
};

export const sortOptions: string[] = ["Title", "Score", "Popularity", "Release Date"];

export const getOptions = function (mediaType: string, type: string) {
	if (type === "genres") return [genres, tags];
	else if (type === "format" && mediaType === "anime") return [animeFormat];
	else if (type === "format" && mediaType === "manga") return [mangaFormat];
	else if (type === "status" && mediaType === "anime") return [animeStatus];
	else if (type === "status" && mediaType === "manga") return [mangaStatus];
	else if (type === "sort") return [sortOptions];
	else return [generateSeason(mediaType)];
};
