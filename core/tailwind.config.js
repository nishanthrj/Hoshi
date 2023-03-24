/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				dark: {
					DEFAULT: "#110f19",
					50: "#f8f7fd",
					100: "#e2ddf2",
					200: "#9c96b0",
					300: "#646071",
					400: "#292439",
					500: "#201d2d",
					600: "#1d1a28",
					700: "#171520",
					800: "#0e0c14",
					900: "#0b090f",
				},
				score: {
					green: "#7bd555",
					orange: "#f79a63",
					red: "#e85d75",
				},
				stats: {
					green: "#68d639",
					blue: "#02a9ff",
					violet: "#9256f3",
					yellow: "#e6e63e",
					red: "#e74c66",
				},
			},
			fontFamily: {
				sans: ["var(--font-overpass)"],
			},
			screens: {
				"max-xs": { max: "425px" },
			},
		},
	},
	plugins: [require("@tailwindcss/line-clamp")],
};
