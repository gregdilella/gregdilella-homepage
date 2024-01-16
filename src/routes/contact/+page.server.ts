import type { Actions } from './$types';
import { z } from 'zod';
import { superValidate, setMessage } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';

const { EMAILJS_KEY } = import.meta.env;

const formSchema = z
	.object({
		user_name: z.string().min(3, 'Is that really your name?'),
		user_email: z.string().email('Is this an email?'),
		message: z.string().min(5, 'Your message is too short')
	})
	.required();

export const load = async () => {
	const form = await superValidate(formSchema);
	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, formSchema);
		if (!form.valid) return fail(400, { form });

		const data = {
			service_id: 'service_m5dhn7u',
			template_id: 'template_0ea3ewq',
			accessToken: EMAILJS_KEY,
			user_id: '9KMOedTUZog1ajUbn',
			template_params: form.data
		};

		await fetch('https://api.emailjs.com/api/v1.0/email/send', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'content-type': 'application/json'
			}
		}).then(({ ok }) => {
			if (!ok) {
				setMessage(form, 'Something went wrong');
			}
			setMessage(form, 'Your email was sent successfully!');
		});

		return { form };
	}
} satisfies Actions;
