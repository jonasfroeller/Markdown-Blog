<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import PageTransition from '$lib/components/Transition.svelte';

	import { theme } from '$lib/scripts/theme';

	import 'open-props/style';
	import 'open-props/normalize';
	import 'open-props/buttons';
	import '../app.css';

	export let data;
</script>

<svelte:head>
	<link rel="icon" href={$theme == 'dark' ? '/favicon-dark.png' : '/favicon-light.png'} />
</svelte:head>

<div class="layout">
	<Header />

	<main class="block mx-auto">
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>

	<Footer />
</div>
