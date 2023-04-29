<script lang="ts">
	import { fly } from 'svelte/transition';
	import { Moon, Sun } from 'lucide-svelte';
	import { theme, toggleTheme } from '$lib/scripts/theme';
</script>

<button on:click={toggleTheme} aria-label="Toggle theme">
	{#if $theme === 'dark'}
		<div in:fly={{ y: 10 }}>
			<Sun />
			<span>Light</span>
		</div>
	{:else}
		<div in:fly={{ y: -10 }}>
			<Moon />
			<span>Dark</span>
		</div>
	{/if}
</button>

<style>
	button > * {
		display: flex;
		gap: var(--size-2);
	}
</style>
