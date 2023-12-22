<script lang="ts">
	let name = 'Neville Brem';
	import { Application } from '@splinetool/runtime';
	import { onMount } from 'svelte';

	onMount(() => {
		const canvas = document.getElementById('canvas3d');
		const app = new Application(canvas);
		app.load('https://prod.spline.design/D7V0YF6owfNH8OS2/scene.splinecode');
	});
</script>

<div class="flex w-screen h-screen justify-center items-center">
	<div class="flex justify-center flex-col">
		<p class="mx-auto text-8xl font-black">
			{#each name.split('') as char}
				<span class="hover:text-primary-500 ease-in-out duration-200">{char}</span>
			{/each}
		</p>
		<h3 class="mx-auto italic h3 pt-4">
			Bringing <span class="font-black text-primary-500">life</span> to every page
		</h3>
		<button
			class="font-bold btn bg-primary-500 mx-auto mt-6 text-xl p-4 border-b-4 border-primary-200 hover:border-b-8 active:border-none rounded-3xl"
			>Explore</button
		>
	</div>
	<canvas id="canvas3d" class="fixed -z-10"></canvas>
</div>
