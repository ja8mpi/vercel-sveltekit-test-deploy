<script>
	import '../app.css';
	import Footer from '../components/footer/footer.svelte';
	import Navbar from '../components/navbar/navbar.svelte';
</script>

<Navbar />

<slot />

<Footer />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.zinc.800); /* Ensure correct color setting */
	}
</style>
