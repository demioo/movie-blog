import contentfulFetch from '$lib/contentful-fetch';
import { error } from '@sveltejs/kit';
import type { BlogPost } from '../generated/graphql';

const query = `
{
  blogPostCollection {
    items {
      title
      slug
      datePublished
      featuredImage {
        description
        url
      }
    }
  }
}
`;

export async function load() {
	const response = await contentfulFetch(query);

	if (!response.ok) {
		throw error(404, {
			message: response.statusText
		});
	}

	const { data } = await response.json();
	const blogPosts: BlogPost[] = data.blogPostCollection.items;

	return {
		blogPosts
	};
}
