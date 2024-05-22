<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	onMount(() => {
		gsap.to('#linkbadge', { opacity: 1, scale: 1, duration: 0.25, ease: 'expo' });
		gsap.to('#ghbadge', { opacity: 1, scale: 1, duration: 0.25, ease: 'expo', delay: 0.1 });
	});

	export let project: TProject;
</script>

<div class="card flex flex-col justify-between p-8 text-left">
	<div>
		<h1 class="h1 font-bold">{project.name}</h1>
		<hr class="my-4 border-t" />
		<p class="font-bold font-heading-token">Description</p>
		<p>{project.desc}</p>
		<hr class="my-4 border-t" />
		<p class="font-bold font-heading-token">Technologies</p>
		<ul class="disc-list">
			{#each project.tech as tech}
				<li>{tech}</li>
			{/each}
		</ul>
		<hr class="my-4 border-t" />
	</div>
	<div>
		<div class="flex gap-4">
			<a href={project.link} target="_blank">
				<button
					class="link-icon duration-200 ease-in-out hover:text-primary-500"
					id="linkbadge"
					disabled={!project.link}
				>
					<i class="fa-solid fa-globe text-2xl"></i>
				</button>
			</a>
			<a href={project.gHlink} target="_blank">
				<button
					class="link-icon duration-200 ease-in-out hover:text-tertiary-500"
					id="ghbadge"
					disabled={!project.gHlink}
				>
					<i class="fa-brands fa-github text-2xl"></i>
				</button>
			</a>
		</div>
	</div>
</div>
