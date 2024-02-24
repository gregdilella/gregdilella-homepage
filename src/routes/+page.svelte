<script lang="ts">
	import me from '$lib/assets/me.jpg';
	import Timeline from '$lib/components/Timeline.svelte';
</script>

<svelte:head>
	<title>Neville Brem - Home</title>
	<meta name="description" content="The Homepage of Neville Brem" />
	<meta property="og:title" content="Neville Brem" />
	<meta property="og:image" content="favicon.png" />
	<meta property="og:description" content="Homepage of Neville Brem" />
	<meta property="og:url" content="https://www.nevillebrem.com" />
	<meta property="twitter:description" content="Homepage of Neville Brem" />
	<meta property="twitter:title" content="Neville Brem" />
	<meta property="twitter:image" content="favicon.png" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@BremNeville" />
</svelte:head>

<main class="2xl:mx-auto 2xl:max-w-[70%]">
	<div class="flex h-screen justify-center">
		<div class="flex flex-col justify-center">
			<div class="group relative mx-auto">
				<div
					class="absolute inset-0 rounded-full bg-primary-500 opacity-50 blur-2xl duration-500 ease-in-out group-hover:opacity-75"
				></div>
				<h1 class="relative mx-auto text-center text-7xl font-black font-heading-token md:text-8xl">
					Neville Brem
				</h1>
			</div>
			<h3 class="h3 mx-auto pt-4 font-semibold italic">
				Bringing <span
					class="font-extrabold text-primary-500 duration-200 ease-in-out hover:tracking-widest hover:text-green-500"
					>life</span
				> to every page
			</h3>
			<div class="group mx-auto mt-6">
				<a
					href="#about"
					class="text-md btn border-b-4 border-white bg-primary-500 p-4 font-bold duration-200 ease-in-out hover:border-primary-500 hover:bg-white hover:text-primary-500 active:border-none"
					>Explore</a
				>
				<p
					class="mt-2 text-center text-lg font-bold opacity-0 duration-200 ease-in-out group-hover:opacity-100"
				>
					Curious?
				</p>
			</div>
		</div>
	</div>

	<!-- About -->
	<div
		class="mx-auto flex w-[80%] grid-cols-2 flex-col-reverse gap-16 py-8 md:grid md:gap-0"
		id="about"
	>
		<div class="flex items-center justify-center">
			<div class="md:max-w-[75%]">
				<h1 class="h1 font-black">About me</h1>
				<p class="mt-2">
					Hey there, my name is Neville Brem and I am a Web Developer from Zurich, Switzerland. I
					love coding, computer science and everything to do with tech. I am 16 years old and visit
					the Mathematical Scientific High School of Zurich.
				</p>
				<p>
					I began my coding journey in 2021. Since then I've been fascinated with web development
					and learned many technologies around it.
				</p>
			</div>
		</div>
		<span
			class="relative inline-block before:card before:variant-ghost-primary before:absolute before:-inset-1 before:m-auto before:block before:w-full before:translate-x-4 before:translate-y-4 2xl:before:w-1/2"
		>
			<img src={me} alt="me:)" loading="lazy" class="card relative m-auto w-full 2xl:w-1/2" />
			<span></span></span
		>
	</div>

	<!-- Information -->
	<div
		id="information"
		class="grid-row-3 mx-auto flex w-[80%] grid-cols-3 flex-col gap-8 py-8 md:grid"
	>
		<div class="bento-box flex justify-center">
			<div class="my-auto">
				<h1
					class="bento-heading bg-gradient-to-bl from-primary-500 to-secondary-500 bg-clip-text text-6xl text-transparent"
				>
					3 Years
				</h1>
				<p>Of experience</p>
			</div>
		</div>
		<div class="bento-box col-span-2">
			<h1
				class="bento-heading bg-gradient-to-bl from-primary-500 to-secondary-500 bg-clip-text text-6xl text-transparent md:text-8xl"
			>
				500+
			</h1>
			<p>
				Commits on <a href="https://github.com/nevthereal" target="_blank" class="anchor">GitHub</a>
			</p>
		</div>
		<div class="bento-box col-span-2 flex flex-col">
			<div class="m-auto text-left">
				<h1
					class="bento-heading bg-gradient-to-bl from-primary-500 to-secondary-500 bg-clip-text text-4xl text-transparent md:text-6xl"
				>
					Why me?
				</h1>
				<ul class="list-inside list-decimal text-lg font-semibold md:text-2xl">
					<li>Beautifully crafted Websites</li>
					<li>Modern Design</li>
					<li>Keen eye on detail</li>
					<li>Fast response times</li>
				</ul>
			</div>
		</div>
		<div class="bento-box bg-gradient-to-b from-white/25 to-orange-500/25">
			<h1 class="bento-heading text-4xl md:text-6xl">Stack:</h1>
			<ul class="text-md list-inside list-disc text-left font-bold">
				<li><a href="https://kit.svelte.dev" target="_blank">SvelteKit</a></li>
				<li><a href="https://astro.build" target="_blank">Astro</a></li>
				<li><a href="https://tailwindcss.com" target="_blank">TailwindCSS</a></li>
				<li><a href="https://orm.drizzle.team" target="_blank">Drizzle ORM</a></li>
				<li><a href="https://turso.tech" target="_blank">Turso</a></li>
			</ul>
		</div>
		<div class="col-span-3 flex grid-cols-2 flex-col gap-8 md:grid">
			<div class="bento-box flex">
				<div class="mx-auto flex flex-col text-left">
					<i
						class="fa-solid fa-quote-left mx-auto bg-gradient-to-bl from-primary-500 to-secondary-500 bg-clip-text text-left text-3xl text-transparent"
					></i>
					<p class="text-center text-2xl font-semibold italic">
						Design is not just what it looks like and feels like. Design is how it works. <br />
						<span class="text-lg font-normal">- Steve Jobs</span>
					</p>
				</div>
			</div>
			<div class="bento-box flex items-center justify-center">
				<div>
					<h1
						class="bento-heading bg-gradient-to-bl from-primary-500 to-tertiary-500 bg-clip-text text-4xl text-transparent duration-200 ease-in-out hover:tracking-widest"
					>
						Interactivity
					</h1>
					<p>
						Creates a feeling of <span class="group font-bold"
							>connection <a
								href="https://github.com/nevthereal/portfolio"
								class="hidden group-hover:inline"><i class="fa-solid fa-link"></i></a
							></span
						> to the site.
					</p>
				</div>
			</div>
		</div>
	</div>
	<!-- Timeline -->
	<div class="my-16">
		<div class="my-8 text-center">
			<h1 class="h1 font-black">Timeline</h1>
			<h4 class="h4 font-semibold italic">Key moments</h4>
		</div>
		<div class="card mx-auto w-[80%] p-8 md:w-[60%]">
			<Timeline />
		</div>
	</div>
</main>
