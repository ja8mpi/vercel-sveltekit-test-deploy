/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'custom-gray': '#666666',
				'custom-gray-dark': '#363636',
				'custom-gray-light': '#404040',
				'discord-gray': '#313338',
				'discord-gray-light': '#B5BAC1',
				'discord-purple': '#5865F2'
			},
			fontFamily: {
				akshar: ['Akshar', 'sans-serif'],
				arial: ['Arial']
			},
			fontSize: {
				'custom-40': '40px',
				'custom-70': '70px'
			},
			textShadow: {
				'custom-hover': '0px 0px 12px rgba(255, 255, 255, 1)'
			},
			animation: {
				'text-shadow-hover': 'text-shadow-hover 300ms ease-out'
			},
			keyframes: {
				'text-shadow-hover': {
					'0%': {
						textShadow: '0px 0px 0px rgba(255, 255, 255, 0)'
					},
					'100%': {
						textShadow: '0px 0px 12px rgba(255, 255, 255, 1)'
					}
				}
			},
			backgroundImage: {
				// Define the default gradient for the first button
				'gradient-button-default-1': 'linear-gradient(to bottom, #1BA7AB, #0B4345)',
				'gradient-button-hover-1': 'linear-gradient(to bottom, #5A4D9F, #29224B)',

				// Define the default gradient for the second button
				'gradient-button-default-2': 'linear-gradient(to bottom, #B1B1B1, #353535)',
				'gradient-button-hover-2': 'linear-gradient(to bottom, #767676, #272727)',
				'custom-gradient': 'linear-gradient(to bottom, #000000, #666666)',
				'community-cover': 'url("/img/community-cover.webp")',
				'main-cover': 'url("/img/home-hero.webp")'
			}
		}
	},
	plugins: [
		// Plugin to handle text-shadow
		function ({ addUtilities }) {
			addUtilities(
				{
					'.text-shadow': {
						textShadow: '0px 0px 0px rgba(0, 0, 0, 0)'
					},
					'.text-shadow-custom-hover': {
						textShadow: '0px 0px 12px rgba(255, 255, 255, 1)'
					}
				},
				['responsive', 'hover']
			);
		}
	]
};
