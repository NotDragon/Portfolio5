<script lang="ts">
	import { setContext } from "svelte";
	import { currentSlide, prevSlide, mouseDownAt, percentage, prevPercentage, isTabOpen, hasScrolled, openImage } from "$lib/Image";
	import { get, writable } from "svelte/store";
	import type { Writable } from 'svelte/store'
	import { fade } from 'svelte/transition';

	let track: HTMLElement;

	const childrenCount = setContext<Writable<number>>('childrenCount', writable(0));
	const handlePan = (duration = 1200) => {
		hasScrolled.set(true);

		track.animate({
			transform: `translate(${get(percentage)}%, -50%)`
		}, { duration: duration, fill: 'forwards' });


		// 			   limit currentSlide between 1 and childrenCount
		$currentSlide = Math.max(1, Math.min(
			// calculate the current slide
			Math.ceil((-get(percentage)) / (100 / get(childrenCount))),
			get(childrenCount)));

		for(const image of track.getElementsByClassName('image')) {
			image.animate({
				backgroundPosition: `${100 + get(percentage)}% center`
			}, { duration: duration, fill: 'forwards' });
		}
	};
	setContext('handlePan', handlePan);

	const handleOnDown = (e: Touch | MouseEvent) => {
		mouseDownAt.set(e.clientX);
		prevSlide.set(get(currentSlide));
		hasScrolled.set(false);
	};

	const handleOnUp = () => {
		mouseDownAt.set(-1);
		prevPercentage.set(get(percentage));
	};

	const handleOnMove = (e: Touch | MouseEvent) => {
		if($isTabOpen) return;
		if(get(mouseDownAt) === -1) return;

		const mouseDelta = get(mouseDownAt) - e.clientX,
				maxDelta = window.innerWidth / 2;

		const percentage_t = (mouseDelta / maxDelta) * -100,
				nextPercentageUnconstrained = get(prevPercentage) + percentage_t;
		let nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

		percentage.set(nextPercentage);

		handlePan();
	};

	$: if($isTabOpen) {
		$percentage = -(($currentSlide - 0.5) * (100 / $childrenCount));
		handlePan(100);
	}
</script>

<main>
	<div
			on:mousedown={ e => handleOnDown(e) }
			on:touchstart={ e => handleOnDown(e.touches[0]) }
			on:mouseup={ handleOnUp }
			on:touchend={ handleOnUp }
			on:mousemove={ e => handleOnMove(e) }
			on:touchmove={ e => handleOnMove(e.touches[0]) }
			bind:this={ track } id="image-container" style="{$isTabOpen? `top: 22%;`: ''}">

			<slot />
	</div>

	{#if !$isTabOpen}
	<div id="footer" transition:fade={{ delay: 0, duration: 100 }}>
		<span id="counter">{$currentSlide} | {$childrenCount}</span>
	</div>
	{/if}
</main>

<style>
    #image-container {
        position: absolute;
        display: flex;
        gap: 4vmin;
        top: 50%;
		left: 50%;
        transform: translate(0%, -50%);
        user-select: none;
		transition: all 200ms ease-out 100ms, left 300ms ease-out 200ms;
    }

	#footer {
        display: flex;
        justify-content: center;
        width: 100%;
	}

	#counter {
        position: fixed;
        margin: auto 0;
        top: 90%;
        font-size: 17px;
	}
</style>