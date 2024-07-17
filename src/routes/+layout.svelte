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
	import Footer from '$lib/components/Footer.svelte';
	import { inject } from '@vercel/analytics';

	inject();
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
	<main class="mx-8 md:mx-auto md:max-w-[80%] xl:max-w-[70%] 2xl:max-w-[60%]">
		<slot />
	</main>
	<svelte:fragment slot="footer">
		<Footer />
	</svelte:fragment>
</AppShell>
