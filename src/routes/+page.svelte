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
		placement: 'top'
	};
	onMount(() => {
		const canvas = document.getElementById('canvas3d');
		const app = new Application(canvas);
		app.load('https://prod.spline.design/H-wZEaPskiwj5NSS/scene.splinecode');
	});
</script>

<div class="flex w-screen h-screen justify-center">
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
			class="font-bold btn bg-primary-500 mx-auto mt-6 text-xl p-4 border-b-4 border-white hover:border-primary-500 hover:border-b-0 hover:border-t-4 hover:text-primary-500 hover:bg-white duration-300 ease-in-out active:border-none"
			use:popup={popupExplore}>Explore</a
		>
		<p data-popup="popupExplore" class="text-sm font-semibold">curious?</p>
	</div>
</div>
<div class="grid grid-cols-2" id="about">
	<div>
		<canvas use:popup={popupMac} class="" id="canvas3d"></canvas>
		<p data-popup="popupMac" class="text-sm font-semibold">hit space</p>
	</div>
	<div class="flex justify-center items-center">
		<div class="max-w-[75%]">
			<h1 class="h1">About me</h1>
			<p class="mt-2">
				Hey there, my name is Neville Brem and I am a Web Developer from Zurich, Switzerland. I love
				coding, computer science and everything to do with tech. I am 16 years old and visit the
				Mathematical Scientific High School of Zurich.
			</p>
			<p>
				I began my coding journey in 2021. Since then I've been fascinated with web development and
				learned many technologies around it.
			</p>
		</div>
	</div>
</div>

<div id="information" class="w-[80%] mx-auto grid grid-cols-3 grid-row-4 gap-8 mb-4">
	<div class="bento-box flex justify-center">
		<div class="my-auto">
			<p
				class="bento-heading text-6xl bg-gradient-to-bl from-primary-700 to-secondary-300 bg-clip-text text-transparent"
			>
				3 Years
			</p>
			<p>Of experience</p>
		</div>
	</div>
	<div class="bento-box col-span-2">
		<p
			class="bento-heading bg-gradient-to-bl from-primary-700 to-secondary-300 bg-clip-text text-transparent text-8xl"
		>
			500+
		</p>
		<p>
			Commits on <a href="https://github.com/nevthereal" target="_blank" class="anchor">GitHub</a>
		</p>
	</div>
	<div class="grid grid-cols-2 gap-8 col-span-2">
		<div class="bento-box bg-gradient-to-t from-white/25 to-cyan-500/25">
			<p class="bento-heading text-6xl">Stack 1:</p>
			<ul class="disc-list text-left text-xl font-bold">
				<li><a href="https://react.dev" target="_blank">React</a></li>
				<li><a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a></li>
				<li><a href="https://tailwindcss.com" target="_blank">TailwindCSS</a></li>
				<li><a href="https://framer.com/motion" target="_blank">framer-motion</a></li>
			</ul>
		</div>
		<div class="bento-box bg-gradient-to-b from-white/25 to-orange-500/25">
			<p class="bento-heading text-6xl">Stack 2:</p>
			<ul class="disc-list text-left text-xl font-bold">
				<li><a href="https://kit.svelte.dev" target="_blank">SvelteKit</a></li>
				<li><a href="https://tailwindcss.com" target="_blank">TailwindCSS</a></li>
				<li><a href="https://skeleton.dev" target="_blank">Skeleton UI</a></li>
				<li><a href="https://spline.design" target="_blank">Spline</a></li>
			</ul>
		</div>
	</div>
	<div class="bento-box row-span-2 flex flex-col">
		<div class="text-left m-auto">
			<p
				class="bento-heading text-6xl bg-gradient-to-bl from-primary-700 to-secondary-300 bg-clip-text text-transparent"
			>
				Why me?
			</p>
			<ul class="disc-list text-xl font-bold">
				<li>Beautifully crafted Websites</li>
				<li>Modern Design</li>
				<li>Keen eye on detail</li>
				<li>Fast response times</li>
			</ul>
		</div>
	</div>
	<div class="bento-box col-span-2 flex">
		<div class="text-left mx-auto flex flex-col">
			<i
				class="fa-solid fa-quote-left text-left text-3xl mx-auto bg-gradient-to-bl from-primary-700 to-secondary-300 bg-clip-text text-transparent"
			></i>
			<p class="text-left text-2xl font-semibold italic">
				Design is not just what it looks like and feels like. Design is how it works. <br />
				<span class="font-normal text-lg">- Steve Jobs</span>
			</p>
		</div>
	</div>
	<div class="col-span-3 grid grid-cols-2 gap-8">
		<div class="bento-box">asd</div>
		<div class="bento-box">asd</div>
	</div>
</div>
