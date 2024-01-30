<script lang="ts">
	import { page } from '$app/stores';
	import {
		RadioGroup,
		RadioItem,
		getDrawerStore,
		type DrawerSettings
	} from '@skeletonlabs/skeleton';

	let value: number = 0; // Activating the different elements in the Nav
	$: if ($page.url.pathname === '/') {
		value = 0;
	} else if ($page.url.pathname === '/work') {
		value = 1;
	} else if ($page.url.pathname === '/contact') {
		value = 2;
	}

	const drawerStore = getDrawerStore();

	const navSettings: DrawerSettings = {
		id: 'nav',
		position: 'top',
		bgDrawer: 'bg-surface-200-700-token',
		border: 'border-surface-400-500-token border',
		height: 'h-auto',
		padding: 'p-4',
		rounded: 'rounded-token'
	};
</script>

<RadioGroup
	class="hidden md:block fixed left-6 top-1/2 -translate-y-1/2"
	flexDirection="flex-col"
	gap="gap-2"
>
	<a href="/" class="flex justify-center">
		<RadioItem
			bind:group={value}
			name="home"
			value={0}
			class="rounded-full aspect-square text-xl my-auto flex justify-center"
			><i class="fa-solid fa-house m-auto"></i>
		</RadioItem></a
	>
	<a href="/work" class="flex justify-center">
		<RadioItem
			bind:group={value}
			name="work"
			value={1}
			class="rounded-full aspect-square text-xl my-auto flex justify-center"
			><i class="fa-solid fa-suitcase m-auto"></i></RadioItem
		></a
	>
	<a href="/contact" class="flex justify-center">
		<RadioItem
			bind:group={value}
			name="contact"
			value={2}
			class="rounded-full aspect-square text-xl my-auto flex justify-center group"
			><i class="fa-solid fa-address-book m-auto"></i>
		</RadioItem>
	</a>
</RadioGroup>

<button
	on:click={() => drawerStore.open(navSettings)}
	class="md:hidden btn variant-ghost-surface fixed top-6 left-6 chip aspect-square flex items-center z-20"
>
	<i class="fa-solid fa-bars-staggered text-lg"></i>
</button>
