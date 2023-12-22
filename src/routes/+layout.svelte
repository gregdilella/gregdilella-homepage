<script lang="ts">
	import '../app.postcss';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { AppShell, RadioGroup, RadioItem, storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
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
</script>

<AppShell>
	<svelte:fragment slot="sidebarLeft">
		<RadioGroup class="fixed left-6 top-1/2 -translate-y-1/2" flexDirection="flex-col" gap="gap-2">
			<RadioItem
				bind:group={value}
				name="home"
				value={0}
				class="rounded-full aspect-square flex justify-center text-xl"
				><a class="m-auto flex gap-1 group" href="/"
					><i class="fa-solid fa-house"></i>
				</a></RadioItem
			>
			<RadioItem
				bind:group={value}
				name="work"
				value={1}
				class="rounded-full aspect-square flex justify-center text-xl"
				><a class="m-auto" href="/work"><i class="fa-solid fa-suitcase"></i></a></RadioItem
			>
			<RadioItem
				bind:group={value}
				name="contact"
				value={2}
				class="rounded-full aspect-square flex justify-center text-xl"
				><a class="m-auto" href="/contact"><i class="fa-solid fa-address-book"></i></a></RadioItem
			>
		</RadioGroup>
	</svelte:fragment>
	<slot />
</AppShell>
