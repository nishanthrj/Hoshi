/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
};

module.exports = {
	...nextConfig,
	output: "standalone",
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "media.kitsu.io",
			},
			{
				protocol: "https",
				hostname: "cdn.myanimelist.net",
			},
			{
				protocol: "https",
				hostname: "img.youtube.com",
			},
			{
				protocol: "https",
				hostname: "s4.anilist.co",
			},
			{
				protocol: "https",
				hostname: "fxwjqggdvzhwhieoqzmq.supabase.co",
			},
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
			},
		],
	},
};
