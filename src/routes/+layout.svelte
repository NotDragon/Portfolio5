<script lang="ts">
	import { isTabOpen } from "$lib/Image";
    import Navbar from "$lib/Navbar.svelte";
	import PageTransition from '$lib/PageTransition.svelte';
	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;
</script>


<PageTransition pathname={data.pathname}>
	<main class="app">
		{#if !$isTabOpen}
			<Navbar></Navbar>
		{/if}
		<slot />
	</main>
</PageTransition>


<style>

    :global(body){
        height: 100vh;
        width: 100vw;
        background-color: #171515;
        margin: 0;
        overflow-x: hidden;
        color:  white;
        font-family: "Segoe UI", serif;
    }

    :global(a) {
        color: white;
        transition: color 100ms;
    }

    :global(a:hover) {
        text-decoration: none;
        color: rgb(194, 194, 194);
    }

</style>
