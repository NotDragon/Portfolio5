<script lang="ts">
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";

    export let src = '';
    export let onclick: Function | undefined = undefined;
</script>

<main class="panel" on:click={ e =>{ onclick? onclick(): window.open(src, "_blank") }}>
    {#if src !== ''}
        <img class="panel-image" src="{src}"/>
    {/if}
    <slot/>
</main>

<style>
    .panel {
        width: 100%;
        background-color: #101010;
        border-radius: 7px;
        transition: all 100ms;
        padding: 2.5%;
        
    }

    .panel:hover {
        transform: scale(1.05, 1.05);
        cursor: pointer;
    }

    .panel-image {
        width: 100%;
        object-fit: cover;
        height: 20rem;
    }
</style>