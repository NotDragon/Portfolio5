<script lang="ts">
    import { faBackward } from '@fortawesome/free-solid-svg-icons/index';
	import Fa from 'svelte-fa';
</script>

<div id="back-container" on:click={() => { window.location = '/'; }}>
    <Fa id="back" icon={faBackward}></Fa>
</div>

<main id="container">
    <h1>5G - Extra Resources</h1>
    <p class="text">
        <a href="/blog/html/projects/5G.html">HTML Page with Graphs</a>
    </p>
</main>

<style>
    #back-container {
        position: absolute;
        left: 2%;
        top: 95%;
    }
    :global(#back) {
        transform: scale(1.3, 1.3);
        transition: all 100ms;
    }
    :global(#back):hover {
        cursor: pointer;
        transform: scale(1.4, 1.4);
    }

    #container {
        text-align: center;
    }
</style>