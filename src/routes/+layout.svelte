<script lang="ts">
	import '../app.postcss';
	import {
		AppShell,
		Drawer,
		Modal,
		getDrawerStore,
		initializeStores
	} from '@skeletonlabs/skeleton';
	import Navbar from '$lib/components/Navbar.svelte';

	initializeStores();

	const drawerStore = getDrawerStore();
</script>

<Modal />
<Drawer>
	{#if $drawerStore.id === 'nav'}
		<div class="flex justify-center gap-8 p-4 text-2xl">
			<a on:click={() => drawerStore.close()} href="/"><i class="fa-solid fa-house"></i></a>
			<a on:click={() => drawerStore.close()} href="/work"><i class="fa-solid fa-suitcase"></i></a>
			<a on:click={() => drawerStore.close()} href="/contact"
				><i class="fa-solid fa-address-book"></i></a
			>
		</div>
	{/if}
</Drawer>
<AppShell>
	<svelte:fragment slot="sidebarLeft">
		<Navbar />
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="footer">
		<footer class="text-center p-8 md:w-[50%] mx-auto">
			<h1 class="font-bold font-heading-token">© Neville Brem 2024</h1>
			<div class="flex gap-2 justify-center pt-4">
				<a class="btn" href="https://github.com/nevthereal" target="_blank"
					><i class="fa-brands fa-github text-2xl"></i></a
				>
				<a class="btn" href="https://twitter.com/bremneville" target="_blank"
					><i class="fa-brands fa-x-twitter text-2xl"></i></a
				>
				<a class="btn" href="mailto:contact@nevillebrem.com"
					><i class="fa-solid fa-envelope text-2xl"></i></a
				>
			</div>
		</footer>
	</svelte:fragment>
</AppShell>
