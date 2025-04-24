// src/routes/contact/+page.server.ts
import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { contactForm2 } from '$lib/server/db/schema';
import { z } from 'zod';

export const actions = {
	default: async ({ request }) => {
		const data = Object.fromEntries(await request.formData());

		const schema = z.object({
			name: z.string().min(1),
			email: z.string().email(),
			message: z.string().min(1)
		});

		const result = schema.safeParse(data);

		if (!result.success) {
			return fail(400, { error: 'Invalid form input', issues: result.error.flatten() });
		}

		try {
			await db.insert(contactForm2).values({
				id: crypto.randomUUID(),
				name: result.data.name,
				email: result.data.email,
				message: result.data.message
			});

			// redirect to homepage after successful submission
			throw redirect(303, '/');
		} catch (error) {
			console.error('Database error:', error);

			return fail(500, {
				error: 'An error occurred while saving the form data. Please try again later.'
			});
		}
	}
};
