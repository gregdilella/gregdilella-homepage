<script lang="ts">
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	export let icon: string;
	export let link: string;
	export let title: string;
	export let body: string;

	onMount(() => {
		gsap.to('#card', { scale: 1, opacity: 1, duration: 0.1, ease: 'expo' });
	});
</script>

<a href={link} target="_blank" class="card flex scale-50 gap-4 p-4 opacity-50" id="card">
	<div class="chip text-2xl"><i class={icon}></i></div>
	<div class="my-auto">
		<h3 class="h3 font-bold">{title}</h3>
		<p class="hidden md:block">{body}</p>
	</div>
</a>
