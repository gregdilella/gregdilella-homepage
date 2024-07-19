<script lang="ts">
	import Project from '$lib/components/Project.svelte';

	const projects: TProject[] = [
		{
			name: 'Zenith',
			desc: 'AI-powered planning. An LLM converts natural language input to an Event object. No need for complex UIs and other hurdles. Probably my most complex app yet.',
			tech: [
				'SvelteKit',
				'TailwindCSS',
				'Drizzle ORM',
				'Neon',
				'Lucia auth',
				'Stripe',
				'Upstash Rate Limiter'
			],
			link: 'https://zenithproductivity.app',
			gHlink: 'https://github.com/nevthereal/zenith'
		},
		{
			name: 'Codoodle',
			desc: 'A "social media app" built with SvelteKit and some other modern technologies. This project taught me a lot of backend concepts like auth and databases.',
			tech: ['SvelteKit*', 'TailwindCSS', 'Drizzle ORM', 'Turso', 'Lucia auth'],
			link: 'https://codoodle.nevillebrem.com',
			gHlink: 'https://github.com/nevthereal/codoodle'
		},
		{
			name: 'Wolffe Bricks',
			desc: 'An ecommerce app I built for me and a friend to sell PDF toy instructions.',
			tech: ['SvelteKit*', 'TailwindCSS', 'Stripe'],
			link: 'https://wolffebricks.store',
			gHlink: 'https://github.com/nevthereal/wolffebricks-svelte'
		},
		{
			name: 'Lapland Course Event Page',
			desc: 'Landing page for an event of the finnish Association of Spinal Surgeons.',
			tech: ['Astro', 'TailwindCSS', 'React'],
			link: 'https://lapin-kurssi-2024.vercel.app/',
			gHlink: null
		},
		{
			name: 'BarMates Homepage',
			desc: 'A landing page for our sports nutrition business.',
			tech: ['Astro', 'TailwindCSS', 'Svelte', 'daisy UI'],
			link: 'https://barmates.ch',
			gHlink: 'https://github.com/nevthereal/barmates-landing'
		}
	];
</script>

<svelte:head>
	<title>Neville Brem - Work</title>
	<meta name="description" content="Projects of Neville Brem" />
</svelte:head>

<main class="">
	<div class="text-center">
		<div class="my-16">
			<h1 class="text-7xl font-black font-heading-token">Work</h1>
			<h4 class="h4 font-semibold italic">Selection of projects</h4>
		</div>
		<p>
			This page only features some of my projects, but you can find all of them on
			<a href="https://github.com/nevthereal" class="anchor" target="_blank">GitHub</a> or on my
			<a href="https://links.nevillebrem.com" class="anchor" target="_blank">linktree</a>.
		</p>
		<div class="my-16 flex grid-cols-2 flex-col gap-8 xl:grid">
			{#each projects as project}
				<Project {project} />
			{/each}
		</div>
		<p>
			* These SvelteKit applications are built with <a
				href="https://skeleton.dev"
				class="anchor"
				target="_blank">Skeleton UI</a
			>
		</p>
	</div>
</main>
