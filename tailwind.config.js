/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#8257e6",
					hover: "#6e46c1",
				},
				secondary: {
					DEFAULT: "#5771c3",
					hover: "#4c5da9",
				},
			},
		},
	},
	plugins: [],
};
