import { contentfulFetch } from '$lib/contentful/contentful-fetch';
import { error } from '@sveltejs/kit';
import type { BlogPost } from '../../../generated/graphql';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const query = `
	{
	  blogPostCollection(where: { slug: "${params.slug}" },limit: 1) {
	    items {
	      title
	      slug
	      datePublished
				content {
					json
				}
	      featuredImage {
	        description
	        url
	      }
	    }
	  }
	}
	`;

	const response = await contentfulFetch({ query });

	if (!response.ok) {
		throw error(404, {
			message: response.statusText
		});
	}

	const { data } = await response.json();
	const article: BlogPost = data.blogPostCollection.items[0];

	return {
		article
	};
}) satisfies PageServerLoad;
