<script>
	import NewsList from '../../components/newsList/newsList.svelte';
	export let data;
	console.log(data)
</script>

<NewsList data={data.htmlContent} />
