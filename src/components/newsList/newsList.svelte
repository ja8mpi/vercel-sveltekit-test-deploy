<script>
	import NewsListItem from './newsListItem.svelte';
	export let data;
	// const newsItems = data.data;
</script>

<main class="news grid grid-cols-3 gap-10 p-10 text-white font-akshar">
	<!-- {#each newsItems as item}
		<NewsListItem {item} />
	{/each} -->
	{@html data}
</main>

<style>
	:global(.news strong) {
		display: inline;
	}
	:global(.news em) {
		display: inline;
	}
</style>
