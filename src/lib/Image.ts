import { writable } from 'svelte/store';

export const hasScrolled = writable(false);
export const currentSlide = writable(1);
export const prevSlide = writable(-1);
export const isTabOpen = writable(false);
export const mouseDownAt = writable(0);
export const prevPercentage = writable(0);
export const percentage = writable(0);
export const openImage = writable('');