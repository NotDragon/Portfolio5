<main class="grid-container">
    <slot/>
</main>

<style>
    .grid-container {
        display: grid;
        grid-template-columns: 20vw 20vw;
        gap: 3% 7.5%;
    }

</style>