<script lang="ts">
	import { slide } from 'svelte/transition';

	export let title: string;
	export let description: string;

	let show: boolean = false;

	const arrowImgUrl = '/img/arrow.png';

	function toggleDropdown() {
		show = !show;
	}

	function handleKeydown(event: KeyboardEvent) {
		// Handle Enter or Space key
		if (event.key === 'Enter' || event.key === ' ') {
			toggleDropdown();
		}
	}
</script>

<div class={`flex flex-col  py-4 transition-all ease-in duration-200`}>
	<div
		class="flex w-full items-center cursor-pointer"
		on:click={toggleDropdown}
		on:keydown={handleKeydown}
		role="button"
		aria-expanded={show}
		tabindex="0"
	>
		<img
			src={arrowImgUrl}
			alt="arrow icon"
			class={`${show && 'rotate-90'} transition-all px-4 w-12 h-6 ease-in duration-200`}
		/>
		<h1 class="pl-2 text-3xl">{title}</h1>
	</div>
	{#if show}
		<p transition:slide class="pl-14">
			{description}
		</p>
	{/if}
</div>
