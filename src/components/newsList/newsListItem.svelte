<script>
	export let item;
</script>

<div class="flex flex-col">
	<img src={item.img.url} alt={item.img.alt} />
	<div class="flex w-full justify-between items-end py-8">
		<h2 class="text-4xl">{item.title}</h2>
		<h3 class="text-3xl">{item.date}</h3>
	</div>
	<p class="text-xl font-akshar">{item.description}</p>
</div>
