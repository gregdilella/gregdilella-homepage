// import { fail, superValidate } from 'sveltekit-superforms';
// import { zod } from 'sveltekit-superforms/adapters';
// import { z } from 'zod';
// import { db } from '$lib/server/db/index.js';
// import { contactForm } from '$lib/server/db/schema.js';
// import { message } from 'sveltekit-superforms';

// // Define the Zod schema
// const schema = z.object({
// 	firstname: z.string(),
// 	lastname: z.string(),
// 	email: z.string().email(),
// 	phonenumber: z
// 		.string()
// 		.regex(/^(\+\d{1,3}[- ]?)?\d{10}$/, { message: 'Invalid phone number format' }),
// 	message: z.string().min(4, { message: 'Message cannot be empty.' }),
// });

// export const load = async () => {
// 	// Initialize the form validation with the schema
// 	const form = await superValidate(zod(schema));
// 	return { form };
// };

// export const actions = {
// 	default: async ({ request }) => {
// 		// Validate the incoming request with the schema
// 		const form = await superValidate(request, zod(schema));

// 		// If validation fails, return the form with errors
// 		if (!form.valid) {
// 			return fail(400, { form });
// 		}

// 		try {
// 			// Insert the validated form data into the database
// 			await db.insert(contactForm).values({
// 				id: crypto.randomUUID(), // Generate a unique ID
// 				firstName: form.data.firstname,
// 				lastName: form.data.lastname,
// 				email: form.data.email,
// 				phoneNumber: form.data.phonenumber,
// 				message: form.data.message,
// 			});

// 			// Return a success message
// 			return message(
// 				form,
// 				'Thank you! Your form has been submitted successfully. We will get back to you shortly!'
// 			);
// 		} catch (error) {
// 			console.error('Database error:', error);

// 			// Handle database errors gracefully
// 			return fail(500, {
// 				form,
// 				error: 'An error occurred while saving the form data. Please try again later.',
// 			});
// 		}
// 	},
// };
