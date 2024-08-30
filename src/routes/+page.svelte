<script lang="ts">
	const videoUrl = '/video/intro_video.mp4';
	const heroMediaUrl = '/img/home-cover-photo.webp';
	const textLogoUrl = '/img/logo-text.png';
	const heroImgUrl = '/img/home-hero.webp';
	const logoWhiteText = '/img/logo-white-text.png';
</script>

<main class="w-full flex flex-col">
	{#if videoUrl}
		<div class="relative bg-main-cover py-12">
			<div class="flex items-center justify-center">
				<!-- <video class="w-1/3 h-2/3 object-cover" autoplay muted>
					<source src={videoUrl} type="video/mp4" />
					Your browser does not support the video tag.
				</video> -->
				<img src={logoWhiteText} alt="logo text" />
			</div>
			<div class="absolute top-8 left-8 text-white">
				<h3 class="text-lg py-2">Carbon we saved Together</h3>
				<h2 class="text-6xl font-bold">124.6 kg</h2>
			</div>
			<div class=" flex items-center justify-center">
				<div class="text-center">
					<!-- {#if textLogoUrl}
						<img src={textLogoUrl} alt="" class="mb-4 mx-auto" />
					{/if} -->
					<h2 class="text-white font-akshar text-3xl py-4">Available: October</h2>
					<div class="flex items-center justify-center space-x-12">
						<!-- First button with gradient and hover effect -->
						<button
							class="w-80 font-akshar text-3xl bg-gradient-button-default-1 font-semibold text-white py-4 px-8 rounded-3xl transition-all duration-300 hover:bg-gradient-button-hover-1"
						>
							JOIN NOW
						</button>
						<!-- Second button with gradient and hover effect -->
						<button
							class="w-80 font-akshar text-3xl bg-gradient-button-default-2 font-semibold text-white py-4 px-8 rounded-3xl transition-all duration-300 hover:bg-gradient-button-hover-2"
						>
							WATCH TRAILER
						</button>
					</div>
				</div>
			</div>
		</div>
	{:else}
		<p class="text-white text-center">Loading video...</p>
	{/if}
	<img src="/img/xbox_ps.png" class="mx-auto py-8" alt="Header" />
	<div class="relative flex-grow">
		<img src={heroMediaUrl} alt="" class="w-full" />
		<div class="absolute inset-0 flex items-center justify-center">
			<div class="flex items-center justify-center space-x-12 flex-col">
				<h2 class="text-white font-akshar text-5xl py-4">Welcome to:</h2>
				{#if textLogoUrl}
					<img src={textLogoUrl} alt="" class="mb-4 mx-auto" />
				{/if}
				<button
					class="w-80 font-akshar text-3xl bg-gradient-button-default-1 font-semibold text-white my-8 py-4 px-8 rounded-3xl transition-all duration-300 hover:bg-gradient-button-hover-1"
				>
					LEARN MORE
				</button>
			</div>
		</div>
	</div>
</main>
