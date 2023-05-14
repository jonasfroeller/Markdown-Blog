<script lang="ts">
	import { fade } from 'svelte/transition';

	export let url: string;
</script>

{#key url}
	<div class="transition" in:fade>
		<slot />
	</div>
{/key}

<style>
	.transition {
		padding: var(--size-4);
		min-height: 100vh;
		min-height: 100dvh;
		display: flex;
		justify-content: center;
	}
</style>
