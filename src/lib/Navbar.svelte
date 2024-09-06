<script lang="ts">
    import Fa from 'svelte-fa';
    // import { faHome } from '@fortawesome/free-solid-svg-icons/index';
    import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import { goto } from '$app/navigation';
</script>

<main class="navbar">
    <div on:click={e => { goto('/'); }}></div>
    <div on:click={e => { window.location = 'https://github.com/NotDragon' }}><Fa class="fa" icon={faGithub}/></div>
</main>

<style>
    .navbar {
        position: fixed;
        display: grid;
        margin-left: 2vw;
        margin-top: 2.5vh;
        grid-template-columns: 94vw 25vw;
    }

    :global(.fa) {
        cursor: pointer;
    }
</style>