import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				brand: {
					'100': '#DA4381',
					DEFAULT: '#c7316e'
				},
				red: '#FF7474',
				error: '#b80000',
				green: '#3DD9B3',
				blue: '#56B8FF',
				pink: '#EEA8FD',
				orange: '#F9AB72',
				light: {
					'100': '#333F4E',
					'200': '#A3B2C7',
					'300': '#F2F5F9',
					'400': '#F2F4F8'
				},
				dark: {
					'100': '#04050C',
					'200': '#131524'
				},
				primarybg: '#030516',
				secondary: '#1f3449',
				linearbg: 'rgba(12,38,69,0)',
				linearbg2: 'rgba(7,22,38,0)',
				accent: '#60a6e7',
				darkgray: '#aea9b1',
				lightgray: '#e6e0e9'
			},
			fontFamily: {
				poppins: [
					'var(--font-poppins)'
				]
			},
			boxShadow: {
				'drop-1': '0px 10px 30px 0px rgba(66, 71, 97, 0.1)',
				'drop-2': '0 8px 30px 0 rgba(65, 89, 214, 0.3)',
				'drop-3': '0 8px 30px 0 rgba(65, 89, 214, 0.1)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'caret-blink': {
					'0%,70%,100%': {
						opacity: '1'
					},
					'20%,50%': {
						opacity: '0'
					}
				},
				slideIn: {
					'0%': { transform: 'translateX(-100px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				fadeInFromTop: {
					'0%': { transform: 'translateY(-50px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
			},
			animation: {
				'caret-blink': 'caret-blink 1.25s ease-out infinite',
				slideIn: 'slideIn 1s ease-out',
				fadeInFromTop: 'fadeInFromTop 1s ease-out',
			}
		}
	},
	plugins: [require('tailwindcss-animate')],
};
export default config;