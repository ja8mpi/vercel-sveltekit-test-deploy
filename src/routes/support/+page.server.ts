import type { Actions } from './$types';

export const actions: Actions = {
	contact_us: async ({ request }) => {
		const data = await request.formData();
	},
	subscribe: async ({ request }) => {
		const data = await request.formData();
		console.log(data);
	}
};
