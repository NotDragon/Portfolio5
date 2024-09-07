<script lang="ts">
    import { faBackward } from '@fortawesome/free-solid-svg-icons/index';
	import Fa from 'svelte-fa';
</script>

<div id="back-container" on:click={() => { window.location = '/'; }}>
    <Fa id="back" icon={faBackward}></Fa>
</div>

<main id="container">
    <h1>AI - Extra Resources</h1>
    <p class="text">
        <a href="https://docs.google.com/forms/d/1Mfl25Oq7em67OMafR6BV6LMdL78KBzI3frL4H43E1W0/edit">Survey</a> <br>
        <a href="https://docs.google.com/document/d/1cAw73yOUWoDLCei8mCPIAvtQrDS6NnimCNISp4RXgJA/edit ">Results</a> <br>
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