<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { quintOut } from "svelte/easing";
	import { currentSlide, hasScrolled, isTabOpen, openImage } from '$lib/Image';
	import { getContext } from "svelte";
	import type { Writable } from 'svelte/store'
	import { get } from "svelte/store";

	export let title: string;
	export let src: string;
	export let id: string;

	let detail = false;
	let isFocused = false;

	let isHovering = false;

	const child_id = get(getContext('childrenCount') as Writable<number>);
	const child_count = getContext('childrenCount') as Writable<number>;
	child_count.update((i: number) => i + 1);

	const handleMouseEnter = () => {
		isHovering = true;
	};
	const handleMouseExit = () => {
		isHovering = false;
	};

	const handleOnUp = () => {
		if (!get(hasScrolled)) {
			if (isFocused) {
				isTabOpen.update(i => !i);
			} else {
				$currentSlide = child_id + 1;
				isTabOpen.update(i => true);
			}
		}
	};

	$: isFocused = child_id + 1 === $currentSlide;
	$: detail = $isTabOpen && isFocused;

	$: if(detail) {
		$openImage = src;
		console.log(src);
	}

</script>
<main class="image-track"
	  id="{id}"
	  style="
				{!isFocused?
				 'filter: brightness(75%) saturate(75%);'
				 : ''}
				{isHovering?
					'cursor: pointer;':
					''}">

	<div on:mouseenter={handleMouseEnter}
		 on:mouseleave={handleMouseExit}
		 on:mouseup={ handleOnUp }>
		<div class="image" draggable="false"
			 style="background-image: url('{src}');
					{detail?
						'filter: brightness(50%); width: 90vw; height: 45vmin;':
						''}
					{$isTabOpen && !isFocused?
						'filter: brightness(50%); width: 90vw; height: 40vmin;':
						''}">
		</div>
		<div class="imgheader_wrapper">
			{#if isFocused}
				<h2 in:fly={{ delay: 0, duration: 200, x: -100, y: 0, opacity: 0.5, easing: quintOut }}
					class="imgheader" style="{detail? 'font-size: 4rem': ''}">{title}</h2>
			{/if}
		</div>
	</div>

	{#if detail}
		<div in:fly={{ delay: 500, duration: 200, x: -100, y: 0, opacity: 0, easing: quintOut }}
			 out:fade={{ delay: 0, duration: 150 }}
			 class="imgtext">
			<slot />
		</div>
	{/if}
</main>

<style>
    .image-track {
        transition: all 100ms;
	}

    .image {
        width: 32vmin;
        height: 45vmin;
        background-size: cover;
        background-position: top left;
        transition: all 300ms ease-out 200ms;
	}

	.imgheader {
        padding-left: 7.5%;
        width: 32vmin;
        height: 5vmin;
        object-fit: cover;
        object-position: 100% center;
        transition: all 200ms 200ms;
	}

	.imgheader_wrapper {
		position: absolute;
		top: 0;
	}

	.imgtext {
		position: absolute;
		margin-left: 25vw;
		padding-top: 5vh;
        width: 40vw;
	}
</style>