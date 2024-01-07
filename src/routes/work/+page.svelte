<script lang="ts">
	import Project from '$lib/components/Project.svelte';

	const projects: TProject[] = [
		{
			name: 'Wolffe Bricks',
			desc: 'This is an ecommerce app I built for me and a friend.',
			tech: ['SvelteKit*', 'TailwindCSS', 'Stripe'],
			link: 'https://wolffebricks.store',
			gHlink: 'https://github.com/nevthereal/wolffebricks-svelte'
		},
		{
			name: 'Webglacier',
			desc: 'The agency website I built to test out SvelteKit.',
			tech: ['SvelteKit*', 'TailwindCSS'],
			link: 'https://webglacier.netlify.app',
			gHlink: 'https://github.com/nevthereal/webglacier'
		},
		{
			name: 'Codoodle',
			desc: 'The agency website I built to test out SvelteKit.',
			tech: ['SvelteKit*', 'TailwindCSS', 'Drizzle ORM', 'Turso', 'Lucia auth'],
			link: 'https://codoodle.xyz',
			gHlink: 'https://github.com/nevthereal/codoodle'
		}
	];
</script>

<svelte:head>
	<title>Neville Brem - Work</title>
	<meta name="description" content="The Homepage of Neville Brem" />
</svelte:head>

<main class="2xl:w-[60%] 2xl:mx-auto">
	<div class="text-center">
		<div class="my-16">
			<h1 class="font-heading-token font-black text-7xl">Work</h1>
			<h4 class="h4 font-semibold italic">Selection of projects</h4>
		</div>
		<p>
			I've worked on a couple different projects ranging from React to SvelteKit apps. <br />
			These are the few I've published, you can find my whole history on
			<a href="https://github.com/nevthereal" class="anchor" target="_blank">GitHub</a>.
		</p>
		<div class="grid grid-cols-3 gap-8 my-16">
			{#each projects as project}
				<Project {project} />
			{/each}
		</div>
		<p>
			* All SvelteKit applications use <a href="https://skeleton.dev" class="anchor" target="_blank"
				>Skeleton UI</a
			>
		</p>
	</div>
</main>
