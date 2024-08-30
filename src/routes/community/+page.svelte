<script>
	const discordLogoUrl = '/img/social/discord-text-logo.png';
	const logoUrl = '/img/logo.png';
	const discordIndicatorActiveUrl = '/img/discord-indicator-active.png';
	const discordIndicatorDefaultUrl = '/img/discord-indicator-default.png';

	export let data;
</script>

<main class="bg-community-cover h-screen bg-cover bg-right bg-fixed">
	<img src={discordLogoUrl} alt="discord logo" class="py-12 px-12" />
	<!-- <iframe
		class="px-32"
		title="discord invite"
		src="https://discord.com/widget?id=1276132679196344341&theme=dark"
		height="500"
		frameborder="0"
		sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
	></iframe> -->
	<div
		class="absolute left-72 top-72 bg-discord-gray w-1/4 p-4 flex flex-col items-center justify-center font-arial"
	>
		<a href="/" class="mb-8">
			<img src={logoUrl} alt="cleanplay logo" class="w-12 h-12" />
		</a>
		<p class="text-discord-gray-light text-base font-light">You are invited to join</p>
		<h2 class="text-white text-3xl font-bold py-2">{data.name}</h2>
		<div class="flex items-center text-discord-gray-light text-base">
			<img src={discordIndicatorActiveUrl} alt="active indicator" class="w-[11px] h-[11px]" />
			<p class="pr-4 pl-1">{data.onlineCount} online</p>
			<img src={discordIndicatorDefaultUrl} alt="default indicator" class="w-[11px] h-[11px]" />
			<p class="pl-1">{data.memberCount} member</p>
		</div>
		<a
			href={data.inviteLink}
			target="_blank"
			class="w-full bg-discord-purple text-center py-2 mt-8 text-base text-white">Accept Invite</a
		>
	</div>
</main>
