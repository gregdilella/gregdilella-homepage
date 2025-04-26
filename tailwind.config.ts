import { join } from 'path';
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { abyss } from './src/abyss';
import animate from 'tailwindcss-animate';




export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			keyframes: {
				'blur-in': {
					'0%': { filter: 'blur(12px)', opacity: '0' },
					'100%': { filter: 'blur(0)', opacity: '1' }
				}
			},
			animation: {
				'blur-in': 'blur-in 0.7s ease-out both'
			}
		}
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				custom: [abyss]
			}
		}),
		animate
	]
} satisfies Config;
