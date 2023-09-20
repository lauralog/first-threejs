/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,sass,scss,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	 	'./assets/**/*.{sass,scss,css}'
	],
	theme: {
		fontFamily:{
			sans: ['Gotham SSm A', 'sans-serif']
		},
		extend: {
			fontFamily: {
				apls: 'alps'
			}
		},
	},
	plugins: [
		require('tailwind-scrollbar-hide')
	],
}
