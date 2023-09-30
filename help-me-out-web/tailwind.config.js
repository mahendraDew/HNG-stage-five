/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"primary-50": "var(--primary-50)",
				"primary-100": "var(--primary-100)",
				"primary-200": "var(--primary-200)",
				"primary-300": "var(--primary-300)",
				"primary-400": "var(--primary-400)",
				"primary-500": "#120b48",
				"primary-600": "var(--primary-600)",
				"primary-700": "var(--primary-700)",
				"primary-800": "var(--primary-800)",
				"primary-900": "var(--primary-900)",
				"primary-main": "var(--primary-main)",

				"secondary-50": "var(--secondary-50)",
				"secondary-100": "var(--secondary-100)",
				"secondary-200": "var(--secondary-200)",
				"secondary-300": "var(--secondary-300)",
				"secondary-400": "var(--secondary-400)",
				"secondary-500": "var(--secondary-500)",
				"secondary-600": "var(--secondary-600)",
				"secondary-700": "var(--secondary-700)",
				"secondary-800": "var(--secondary-800)",
				"secondary-900": "var(--secondary-900)",

				"text-black": "var(--text-black)",
				"text-grey": "var(--text-grey)",
				"text-header": "var(--text-header-black)",
			},
			fontFamily: {
				sora: "var(--sora-family)",
				work: "var(--worksans-family)",
			},
		},
	},
	plugins: [],
};
