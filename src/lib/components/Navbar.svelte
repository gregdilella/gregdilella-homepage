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
		rounded: 'rounded-token',
		width: 'w-auto',
		regionDrawer: 'mx-auto'
	};
</script>

<RadioGroup
	class="fixed left-6 top-1/2 hidden -translate-y-1/2 md:block"
	flexDirection="flex-col"
	gap="gap-2"
>
	<a href="/" class="group relative flex justify-center">
		<RadioItem
			bind:group={value}
			name="home"
			value={0}
			class="my-auto flex aspect-square justify-center rounded-full text-xl"
			><i class="fa-solid fa-house m-auto"></i>
		</RadioItem>
		<div
			class="pointer-events-none absolute left-16 translate-y-1/2 font-medium opacity-0 duration-200 ease-in-out group-hover:opacity-100"
		>
			Home
		</div>
	</a>
	<a href="/work" class="group relative flex justify-center">
		<RadioItem
			bind:group={value}
			name="work"
			value={1}
			class="my-auto flex aspect-square justify-center rounded-full text-xl"
			><i class="fa-solid fa-suitcase m-auto"></i></RadioItem
		>
		<div
			class="pointer-events-none absolute left-16 translate-y-1/2 font-medium opacity-0 duration-200 ease-in-out group-hover:opacity-100"
		>
			Work
		</div>
	</a>
	<a href="/contact" class="group relative flex justify-center">
		<RadioItem
			bind:group={value}
			name="contact"
			value={2}
			class="my-auto flex aspect-square justify-center rounded-full text-xl"
			><i class="fa-solid fa-address-book m-auto"></i>
		</RadioItem>
		<div
			class="pointer-events-none absolute left-16 translate-y-1/2 font-medium opacity-0 duration-200 ease-in-out group-hover:opacity-100"
		>
			Contact
		</div>
	</a>
</RadioGroup>

<button
	on:click={() => drawerStore.open(navSettings)}
	class="variant-ghost-surface btn chip fixed left-6 top-6 z-20 flex aspect-square items-center md:hidden"
>
	<i class="fa-solid fa-bars-staggered text-lg"></i>
</button>
