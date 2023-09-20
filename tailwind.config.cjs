/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,sass,scss,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	 	'./assets/**/*.{sass,scss,css}'
	],
	theme: {
		fontFamily:{
			sans: ['Alps', 'sans-serif']
		},
		extend: {
			fontFamily: {
				alps: ['Alps', 'sans-serif']
			}
		},
	},
	plugins: [
		require('tailwind-scrollbar-hide')
	],
}
