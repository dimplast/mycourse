import { error, fail, redirect } from '@sveltejs/kit';
import { registerUserSchema } from '$lib/schemas';
import { validateData } from '$lib/utils';
import type { Actions  } from './$types'

export const actions : Actions = {
	register: async ({ locals, request }) => {
		const { formData, errors } = await validateData(await request.formData(), registerUserSchema);

		if (errors) {
			return fail(400, {
				data: formData,
				errors: errors.fieldErrors
			});
		}

		const { data, error: err } = await locals.sb.auth.signUp({
			email: formData.email,
			password: formData.password,
		})

		if (err) {
			throw error(500, err.message)
		}

		throw redirect(303, '/login');
	}
};
