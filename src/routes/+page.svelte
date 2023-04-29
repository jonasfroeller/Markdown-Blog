<script lang="ts">
	import { formatDate } from '$lib/scripts/utils';

	export let data;
	let posts = data?.posts ?? [];
	if (posts?.message) {
		posts = [];
	}
</script>

<section>
	<ul id="posts">
		{#each posts as post}
			<li class="post">
				<a href={post.slug} class="title">{post.title}</a>
				<p class="date">{formatDate(post.date)}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>
