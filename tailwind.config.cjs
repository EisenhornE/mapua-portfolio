/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				customBlue: "#1A79E5",
				brownOrange: "#E5861A"
			}
		},
	},
	plugins: [],
}
