<script lang="ts">
	import '../app.postcss';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import {
		AppShell,
		RadioGroup,
		RadioItem,
		storeHighlightJs,
		popup,
		type PopupSettings
	} from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	let value: number = 0;
	$: if ($page.url.pathname === '/') {
		value = 0;
	} else if ($page.url.pathname === '/work') {
		value = 1;
	} else if ($page.url.pathname === '/contact') {
		value = 2;
	}

	const homePopup: PopupSettings = {
		event: 'hover',
		placement: 'right',
		target: 'homePopup'
	};
	const workPopup: PopupSettings = {
		event: 'hover',
		placement: 'right',
		target: 'workPopup'
	};
	const contactPopup: PopupSettings = {
		event: 'hover',
		placement: 'right',
		target: 'contactPopup'
	};
</script>

<AppShell>
	<svelte:fragment slot="sidebarLeft">
		<RadioGroup class="fixed left-6 top-1/2 -translate-y-1/2" flexDirection="flex-col" gap="gap-2">
			<a href="/" class="flex justify-center" use:popup={homePopup}>
				<RadioItem
					bind:group={value}
					name="home"
					value={0}
					class="rounded-full aspect-square text-xl my-auto flex justify-center"
					><i class="fa-solid fa-house m-auto"></i>
				</RadioItem></a
			>
			<a href="/work" class="flex justify-center" use:popup={workPopup}>
				<RadioItem
					bind:group={value}
					name="work"
					value={1}
					class="rounded-full aspect-square text-xl my-auto flex justify-center"
					><i class="fa-solid fa-suitcase m-auto"></i></RadioItem
				></a
			>
			<a href="/contact" class="flex justify-center" use:popup={contactPopup}>
				<RadioItem
					bind:group={value}
					name="contact"
					value={2}
					class="rounded-full aspect-square text-xl my-auto flex justify-center"
					><i class="fa-solid fa-address-book m-auto"></i></RadioItem
				></a
			>
		</RadioGroup>
		<p data-popup="homePopup" class="popup">Home</p>
		<p data-popup="workPopup" class="popup">Work</p>
		<p data-popup="contactPopup" class="popup">Contact</p>
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="footer">
		<footer class="text-center p-8 md:w-[50%] mx-auto">
			<h1>©Neville Brem 2024</h1>
			<div class="flex gap-2 justify-center">
				<a class="btn" href="https://github.com/nevthereal" target="_blank"
					><i class="fa-brands fa-github text-2xl"></i></a
				>
				<a class="btn" href="https://twitter.com/bremneville" target="_blank"
					><i class="fa-brands fa-x-twitter text-2xl"></i></a
				>
				<a class="btn" href="mailto:contact@nevillebrem.com"
					><i class="fa-regular fa-envelope text-2xl"></i></a
				>
			</div>
		</footer>
	</svelte:fragment>
</AppShell>
