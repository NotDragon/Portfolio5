<script lang="ts">
    export let onclick: Function = () => {};    
</script>

<main class="panel" on:click={ e =>{ onclick() }}>
    <slot/>
</main>

<style>
    .panel {
        width: 100%;
        aspect-ratio: 1;
        background-color: #101010;
        border-radius: 7px;
        transition: all 100ms;
        padding: 2.5%;
    }

    .panel:hover {
        transform: scale(1.05, 1.05);
        cursor: pointer;
    }
</style>