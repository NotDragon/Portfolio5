<script>
	import { isTabOpen } from "$lib/Image";
import Navbar from "$lib/Navbar.svelte";

</script>


<main class="app">
    {#if !$isTabOpen}
        <Navbar></Navbar>
    {/if}
	<slot />
</main>

<style>

    :global(body){
        height: 100vh;
        width: 100vw;
        background-color: #171717;
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
