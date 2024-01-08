<script lang="ts">
	import '../app.postcss';
	import { AppShell, Modal, RadioGroup, RadioItem, initializeStores } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	let value: number = 0;
	$: if ($page.url.pathname === '/') {
		value = 0;
	} else if ($page.url.pathname === '/work') {
		value = 1;
	} else if ($page.url.pathname === '/contact') {
		value = 2;
	}

	initializeStores();
</script>

<Modal />
<AppShell>
	<svelte:fragment slot="sidebarLeft">
		<RadioGroup class="fixed left-6 top-1/2 -translate-y-1/2" flexDirection="flex-col" gap="gap-2">
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
