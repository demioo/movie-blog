<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	let { article } = data;
</script>

<div class="container mx-auto">
	<article class="max-w-4xl mx-auto my-8">
		<h1 class="text-4xl font-bold text-gray-800 mb-4">{article.title}</h1>
		<div class="flex flex-wrap items-center mb-4">
			<img
				src={article.featuredImage?.url}
				alt={article.featuredImage?.description}
				class="mb-4"
				width="800"
				height="450"
			/>
			<div class="text-lg leading-relaxed sm:w-11/12">
				{#if !article.content}
					<p>No content</p>
				{:else}
					{#each article?.content.json.content as contentList}
						{#each contentList.content as paragraph}
							<p class="text-gray-800 mb-4">{paragraph.value}</p>
						{/each}
					{/each}
				{/if}
			</div>
		</div>
	</article>
</div>
