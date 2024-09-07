<script lang="ts">
    import { faBackward } from '@fortawesome/free-solid-svg-icons/index';
	import Fa from 'svelte-fa';
</script>

<div id="back-container" on:click={() => { window.location = '/'; }}>
    <Fa id="back" icon={faBackward}></Fa>
</div>

<main id="container">
    <h1>Coco Tree - Extra Resources</h1>
    <p class="text">
        <a href="https://docs.google.com/presentation/d/1lVpQRCQrwuWALMGywKOMI9TCCoktlBuB/edit?usp=sharing&ouid=100565756179145800677&rtpof=true&sd=true">PowerPoint</a> <br>
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