import { fail } from '@sveltejs/kit'

export const actions = {
	shorten: async ({ request }) => {
    const data = await request.formData()
    const url = data.get('url')

    return fail(501)
  }
}