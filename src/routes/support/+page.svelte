<script lang="ts">
	import { enhance } from '$app/forms';
	import type { FAQItem } from '$lib/utils';
	import FaqItem from '../../components/faqitem/FAQItem.svelte';

	const items: FAQItem[] = [
		{
			title: 'Lorem ipsum odor amet?',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus ut risus vel malesuada. Sed laoreet varius ex, nec imperdiet arcu sodales quis. Sed nec lorem tempus, varius turpis vitae, pellentesque lectus. Curabitur pulvinar diam at metus porttitor, eu tincidunt nisi fringilla. '
		},
		{
			title: 'Lorem ipsum odor amet?',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus ut risus vel malesuada. Sed laoreet varius ex, nec imperdiet arcu sodales quis. Sed nec lorem tempus, varius turpis vitae, pellentesque lectus. Curabitur pulvinar diam at metus porttitor, eu tincidunt nisi fringilla. '
		},
		{
			title: 'Lorem ipsum odor amet?',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus ut risus vel malesuada. Sed laoreet varius ex, nec imperdiet arcu sodales quis. Sed nec lorem tempus, varius turpis vitae, pellentesque lectus. Curabitur pulvinar diam at metus porttitor, eu tincidunt nisi fringilla. '
		},
		{
			title: 'Lorem ipsum odor amet?',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus ut risus vel malesuada. Sed laoreet varius ex, nec imperdiet arcu sodales quis. Sed nec lorem tempus, varius turpis vitae, pellentesque lectus. Curabitur pulvinar diam at metus porttitor, eu tincidunt nisi fringilla. '
		},
		{
			title: 'Lorem ipsum odor amet?',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus ut risus vel malesuada. Sed laoreet varius ex, nec imperdiet arcu sodales quis. Sed nec lorem tempus, varius turpis vitae, pellentesque lectus. Curabitur pulvinar diam at metus porttitor, eu tincidunt nisi fringilla. '
		},
		{
			title: 'Lorem ipsum odor amet?',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus ut risus vel malesuada. Sed laoreet varius ex, nec imperdiet arcu sodales quis. Sed nec lorem tempus, varius turpis vitae, pellentesque lectus. Curabitur pulvinar diam at metus porttitor, eu tincidunt nisi fringilla. '
		}
	];
</script>

<main class="bg-custom-gradient text-white flex flex-col">
	<div class="w-1/2 mx-auto py-16">
		<h1 class="text-5xl">FAQ</h1>
		<hr />
		{#each items as { title, description }}
			<FaqItem {title} {description} />
		{/each}
		<hr />
	</div>
	<div class="w-full flex flex-row justify-around py-16">
		<form
			use:enhance
			method="POST"
			action="?/contact_us"
			class="flex flex-col items-start justify-start w-1/3"
		>
			<h2 class="font-bold text-3xl">Contact Us</h2>
			<label for="name" class="py-2 text-xl">Name*</label>
			<input
				required
				type="text"
				name="name"
				id="name"
				class="bg-custom-gray rounded-xl px-4 py-1 w-full"
			/>
			<label for="name" class="py-2 text-xl">Email*</label>
			<input
				required
				type="email"
				name="email"
				id="name"
				class="bg-custom-gray rounded-xl px-4 py-1 w-full"
			/>
			<label for="message" class="py-2 text-xl">Message*</label>
			<textarea
				required
				name="message"
				id="message"
				class="bg-custom-gray resize-none rounded-xl px-4 py-1 w-full"
			>
			</textarea>
			<button
				type="submit"
				class="w-72 mt-8 mx-auto font-akshar text-3xl bg-gradient-button-default-2 font-semibold text-white py-4 px-4 rounded-2xl transition-all duration-300 hover:bg-gradient-button-hover-2"
			>
				SEND
			</button>
		</form>
		<form
			method="POST"
			action="?/subscribe"
			use:enhance
			class="flex flex-col items-start justify-start w-1/3"
		>
			<h2 class="font-bold text-3xl">Stay in the know</h2>
			<label for="subscribeEmail" class="py-2 text-xl">Email*</label>
			<input
				type="email"
				name="email"
				id="subscribeEmail"
				required
				class="bg-custom-gray rounded-xl px-4 py-1 w-4/5"
			/>
			<button
				type="submit"
				class="w-72 mt-8 font-akshar text-3xl bg-gradient-button-default-1 font-semibold text-white py-4 px-4 rounded-2xl transition-all duration-300 hover:bg-gradient-button-hover-2"
			>
				SUBSCRIBE
			</button>
		</form>
	</div>
</main>

<style>
</style>
