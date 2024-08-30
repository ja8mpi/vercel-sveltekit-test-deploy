<script>
	const navItems = [
		{
			text: 'News',
			href: '/news'
		},
		{
			text: 'Community',
			href: '/community'
		},
		{
			text: 'REC',
			href: '/rec'
		},
		{
			text: 'Support',
			href: '/support'
		}
	];
</script>

<nav class=" text-white p-4 flex items-center py-8">
	<a href="/">
		<img src="/img/logo.png" alt="Logo" class="h-10 mr-4" />
	</a>
	<div class="flex justify-start w-2/3">
		{#each navItems as navItem}
			<a
				href={navItem.href}
				class=" hover:scale-110 mx-2 font-akshar transition-all duration-300 ease-out text-custom-40 text-4xl text-shadow hover:text-shadow-custom-hover animate-text-shadow-hover"
				>{navItem.text}</a
			>
		{/each}
	</div>
</nav>
