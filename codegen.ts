import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	schema: [
		{
			'https://graphql.contentful.com/content/v1/spaces/xa5wiusbtnsc': {
				headers: {
					Authorization: `Bearer `
				}
			}
		}
	],
	generates: {
		'src/generated/graphql.ts': {
			plugins: ['typescript', 'typescript-document-nodes']
		}
	}
};

export default config;
