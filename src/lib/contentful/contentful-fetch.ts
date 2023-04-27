import { CONTENTFUL_DELIVERY_API_TOKEN, CONTENTFUL_SPACE_ID } from '$env/static/private';

type ContentfulFetch = {
	query: string;
};

export const contentfulFetch = async ({ query }: ContentfulFetch) => {
	const url = 'https://graphql.contentful.com/content/v1/spaces/' + CONTENTFUL_SPACE_ID;

	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + CONTENTFUL_DELIVERY_API_TOKEN
		},
		body: JSON.stringify({ query })
	});

	return response;
};
