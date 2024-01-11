import type { Actions } from './$types';
import emailjs from '@emailjs/browser';

export const actions = {
	default: async (event) => {
		console.log('Hello');
		emailjs.sendForm('service_m5dhn7u', 'template_0ea3ewq', event.target, '0tvqgP1sw-5fQmDto').then(
			(result) => {
				console.log('SUCCESS!', result.text);
			},
			(error) => {
				console.log('FAILED...', error.text);
			}
		);
	}
} satisfies Actions;
