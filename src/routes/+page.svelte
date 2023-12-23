<script lang="ts">
	import { popup, type PopupSettings } from '@skeletonlabs/skeleton';

	import { Application } from '@splinetool/runtime';
	import { onMount } from 'svelte';

	let name = 'Neville Brem';

	const popupExplore: PopupSettings = {
		event: 'hover',
		target: 'popupExplore',
		placement: 'bottom'
	};
	const popupMac: PopupSettings = {
		event: 'hover',
		target: 'popupMac',
		placement: 'bottom'
	};
	onMount(() => {
		const canvas = document.getElementById('canvas3d');
		const app = new Application(canvas);
		app.load('https://prod.spline.design/H-wZEaPskiwj5NSS/scene.splinecode');
	});
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
		<a
			href="#about"
			class="font-bold btn bg-primary-500 mx-auto mt-6 text-xl p-4 border-b-4 border-primary-200 hover:border-b-8 active:border-none rounded-3xl"
			use:popup={popupExplore}>Explore</a
		>
		<p data-popup="popupExplore" class="text-sm font-semibold">curious?</p>
	</div>
</div>
<div class="grid grid-cols-2" id="about">
	<div>
		<p data-popup="popupMac" class="text-sm font-semibold">press space</p>
		<canvas use:popup={popupMac} class="" id="canvas3d"></canvas>
	</div>
	<div class="flex justify-center items-center">
		<div>
			<h1 class="h1">About me</h1>
			<p class="mt-2">
				Hey there, my name is Neville Brem and I am a Web Developer from Zurich, Switzerland. <br />
				I love coding, computer science and everything to do with tech. <br />
				I am 16 years old and visit the Mathematical Scientific High School of Zurich.
			</p>
		</div>
	</div>
</div>
