/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');
import { Config } from 'tailwindcss';

module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1440px',
			},
		},
		extend: {
			fontFamily: {
				sans: ['var(--font-sans)', ...fontFamily.sans],
				serif: ['var(--font-serif)', ...fontFamily.serif],
				alegreya: ['var(--font-alegreya)', ...fontFamily.serif],
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				primary: 'var(--primary)',
				'primary-foreground': 'var(--primary-foreground)',
				secondary: 'var(--secondary)',
				'secondary-foreground': 'var(--secondary-foreground)',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
	darkMode: ['class', 'class'], // or 'media' if you prefer
};
