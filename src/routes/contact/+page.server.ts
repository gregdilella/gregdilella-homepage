import type { Actions } from './$types';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';

const formSchema = z
	.object({
		name: z.string().min(3, 'Is that really your name?'),
		email: z.string().email('Is this an email?'),
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
		return { form };
	}
} satisfies Actions;
