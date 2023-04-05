interface Media {
	_id: number;
	malId: number;
	kitsuId: number;
	title: string;
	en: string | null;
	enjp: string | null;
	jp: string | null;
	slug: string;
	poster: string | null;
	type: string | null;
	synopsis: string | null;
	status: string | null;
	source: string[] | null;
	genres: string[] | null;
	tags: string[] | null;
	startDate: string | null;
	endDate: string | null;
	rating: string | null;
	score: number | null;
	popularity: number | null;
	likes: number | null;
	recommended: RecommendedMedia[];
}

interface Anime extends Media {
	season: string | null;
	episodeCount?: number | null;
	runtime?: string | null;
	studio: string[] | null;
}

interface Manga extends Media {
	chapterCount: number | null;
	volumeCount: number | null;
	publisher: string[] | null;
}

interface SearchResults {
	data: Anime[] | Manga[];
	pagination: {
		total: number;
		lastPage: number;
		currentPage: number;
	};
}

interface TrendingMedia {
	id: number;
	idMal: number | null;
	title: {
		english: string | null;
		romaji: string | null;
	};
	format: string;
	genres: string[];
	popularity: number;
	description: string;
	coverImage: {
		extraLarge: string | null;
	};
	averageScore: number;
}

interface TrendingData {
	anime: TrendingMedia[];
	manga: TrendingMedia[];
}

interface SearchFilters {
	sort_by?: string;
	exclude_tags?: string;
	exclude_genres?: string;
	tags?: string;
	genres?: string;
	season?: string;
	status?: string;
	subtype?: string;
	q?: string;
}

interface Character {
	character: {
		mal_id: number;
		url: string;
		images: {
			jpg: {
				image_url: string | null;
				small_image_url: string | null;
			};
			webp: {
				image_url: string | null;
				small_image_url: string | null;
			};
		};
		name: string;
	};
	role: string;
	voice_actors?: [
		{
			person: {
				mal_id: number;
				url: string;
				images: {
					jpg: {
						image_url: string | null;
					};
				};
				name: string;
			};
			language: string | null;
		},
	];
}

interface Episode {
	id: number;
	type: string;
	links: {
		self: string;
	};
	attributes: {
		createdAt: Date;
		updatedAt: Date;
		titles: {
			en_jp: string;
		} | null;
		canonicalTitle: string | null;
		seasonNumber: number | null;
		number: number | null;
		relativeNumber: number | null;
		synopsis: string | null;
		airdate: Date | null;
		length: string | null;
		thumbnail: {
			original: string | null;
			meta: {
				dimensions: {};
			};
		};
	};
	relationships: {
		media: {
			links: {
				self: string;
				related: string;
			};
		};
		videos: {
			links: {
				self: string;
				related: string;
			};
		};
	};
}

interface Episodes {
	data: Episode[];
	meta: {
		count: number;
	};
	links: {
		first: string;
		prev: string;
		next: string;
		last: string;
	};
}

interface RecommendedMedia {
	_id: number;
	title: string;
	slug: string;
	poster: string | null;
}

interface RelatedMedia {
	id: number;
	title: string;
	type: string;
	poster: string | null;
	format: string;
	status: string;
	relation: string;
}

interface Trailer {
	title: string;
	trailer: {
		youtube_id: string;
		url: string;
		embed_url: string;
		images: {
			image_url: string;
			small_image_url: string;
			medium_image_url: string;
			large_image_url: string;
			maximum_image_url: string;
		};
	};
}

interface Stats {
	completed: number;
	on_hold: number;
	dropped: number;
	total: number;
	scores: [
		{
			score: number;
			votes: number;
			percentage: number;
		},
	];
}

interface AnimeStats extends Stats {
	watching?: number;
	plan_to_watch?: number;
}

interface MangaStats extends Stats {
	reading?: number;
	plan_to_read?: number;
}

interface Staff {
	person: {
		mal_id: number;
		url: string;
		images: {
			jpg: {
				image_url: string | null;
			};
		};
		name: string;
	};
	positions: string[];
}
