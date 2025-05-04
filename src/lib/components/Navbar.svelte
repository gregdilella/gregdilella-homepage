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
	} else if ($page.url.pathname === '/projects') {
		value = 1;
	} else if ($page.url.pathname === '/contact') {
		value = 2;
	} else if ($page.url.pathname === '/payment') {
		value = 3;
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
	class="flex md:flex-col p-2 md:-translate-y-1/2 md:left-6 max-md:menu-xs bg-base-200 border-base-300 border-2 rounded-box fixed md:top-1/2 max-md:bottom-6 max-md:left-1/2 max-md:-translate-x-1/2 transform z-10"
>
	<a href="/" class="flex justify-center">
		<RadioItem
			bind:group={value}
			name="home"
			value={0}
			class="my-auto flex aspect-square justify-center rounded-full text-xl"
		>
			<i class="fa-solid fa-house m-auto"></i>
		</RadioItem>
	</a>
	<a href="/projects" class="flex justify-center">
		<RadioItem
			bind:group={value}
			name="projects"
			value={1}
			class="my-auto flex aspect-square justify-center rounded-full text-xl"
		>
			<i class="fa-solid fa-suitcase m-auto"></i>
		</RadioItem>
	</a>
	<a href="/contact" class="flex justify-center">
		<RadioItem
			bind:group={value}
			name="contact"
			value={2}
			class="my-auto flex aspect-square justify-center rounded-full text-xl"
		>
			<i class="fa-solid fa-address-book m-auto"></i>
		</RadioItem>
	</a>
	<a href="/payment" class="flex justify-center">
		<RadioItem
			bind:group={value}
			name="payment"
			value={3}
			class="my-auto flex aspect-square justify-center rounded-full text-xl"
		>
			<i class="fa-solid fa-circle-dollar-to-slot m-auto"></i>
		</RadioItem>
	</a>
</RadioGroup>

