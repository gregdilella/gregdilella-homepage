<script lang="ts">
	import { popup, type PopupSettings } from '@skeletonlabs/skeleton';

	let name = 'Neville Brem';

	const popupExplore: PopupSettings = {
		event: 'hover',
		target: 'popupExplore',
		placement: 'bottom'
	};
</script>

<div class="flex w-screen h-screen justify-center items-center">
	<div class="flex justify-center flex-col">
		<div class="relative group mx-auto">
			<div
				class="absolute inset-0 bg-primary-500 blur-2xl rounded-full opacity-50 group-hover:opacity-75 ease-in-out duration-200"
			></div>
			<p class="mx-auto text-8xl font-black relative">
				{#each name.split('') as char}
					<span class="hover:text-primary-500 ease-in-out duration-200">{char}</span>
				{/each}
			</p>
		</div>
		<h3 class="mx-auto italic h3 pt-4">
			Bringing <span class="font-black text-primary-500">life</span> to every page
		</h3>
		<button
			class="font-bold btn bg-primary-500 mx-auto mt-6 text-xl p-4 border-b-8 hover:border-b-0 border-primary-200 hover:border-t-8 active:border-none rounded-3xl"
			use:popup={popupExplore}>Explore</button
		>
		<p data-popup="popupExplore" class="text-sm font-semibold">curious?</p>
	</div>
</div>
