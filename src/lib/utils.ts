import type { z, ZodError } from 'zod'

export const validateData = async (formData :FormData, schema: z.ZodType) => {
	
	const body = Object.fromEntries(formData);

	try {
		const data = schema.parse(body);
		return {
			formData: data,
			errors: null
		};
	} catch (err) {
		console.log('Error: ', err);
		const errors = (err as ZodError).flatten();
		return {
			formData: body,
			errors
		};
	}
};
