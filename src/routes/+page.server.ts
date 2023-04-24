import { contentfulClient } from '$lib/contentful-client';

export async function load() {
	return {
		posts: contentfulClient.getEntries()
	};
}
