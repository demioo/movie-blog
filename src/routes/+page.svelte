<script lang="ts">
	import '../app.css';

	export let data;
</script>

<main class="bg-white text-gray-800">
	<section class="max-w-6xl mx-auto py-12">
		<h1 class="text-6xl font-bold mb-8 text-center tracking-widest">Worth a Watch</h1>
		<p class="text-xl mb-12 text-center" />
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
			{#each data?.blogPosts as post (post)}
				<a
					href={`/articles/${post.slug}`}
					class="p-4 m-2 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out sm:w-full"
				>
					<img src={post.featuredImage?.url} alt={post.featuredImage?.description} class="mb-2" />
					<h3 class="text-gray-800 font-semibold text-lg leading-tight">{post.title}</h3>
				</a>
			{/each}
			<a
				href="#"
				class="p-4 m-2 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out sm:w-full"
			>
				<img src="https://via.placeholder.com/640x360" alt="Movie poster" class="mb-2" />
				<h3 class="text-gray-800 font-semibold text-lg leading-tight">Movie Title</h3>
			</a>
			<a
				href="#"
				class="p-4 m-2 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out sm:w-full"
			>
				<img src="https://via.placeholder.com/640x360" alt="Movie poster" class="mb-2" />
				<h3 class="text-gray-800 font-semibold text-lg leading-tight">Movie Title</h3>
			</a>
		</div>
	</section>
</main>
