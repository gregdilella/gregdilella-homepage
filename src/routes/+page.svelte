<script lang="ts">
	import me from '$lib/assets/me.jpg';
	import Timeline from '$lib/components/Timeline.svelte';
</script>

<svelte:head>
	<title>Neville Brem - Home</title>
	<meta name="description" content="The Homepage of Neville Brem" />
</svelte:head>

<main class="2xl:max-w-[70%] 2xl:mx-auto">
	<div class="flex h-screen justify-center">
		<div class="flex justify-center flex-col">
			<div class="relative group mx-auto">
				<div
					class="absolute inset-0 bg-primary-500 blur-2xl rounded-full opacity-50 group-hover:opacity-75 ease-in-out duration-500"
				></div>
				<h1 class="mx-auto text-7xl md:text-8xl font-black relative font-heading-token text-center">
					Neville Brem
				</h1>
			</div>
			<h3 class="mx-auto italic h3 pt-4 font-semibold">
				Bringing <span
					class="font-extrabold text-primary-500 hover:tracking-widest duration-200 ease-in-out hover:text-green-500"
					>life</span
				> to every page
			</h3>
			<div class="mx-auto mt-6 group">
				<a
					href="#about"
					class="font-bold btn bg-primary-500 text-md p-4 border-b-4 border-white hover:border-primary-500 hover:text-primary-500 hover:bg-white duration-200 ease-in-out active:border-none"
					>Explore</a
				>
				<p
					class="text-center mt-2 font-bold text-lg opacity-0 group-hover:opacity-100 duration-200 ease-in-out"
				>
					Curious?
				</p>
			</div>
		</div>
	</div>

	<!-- About -->
	<div
		class="flex flex-col-reverse gap-16 md:gap-0 md:grid grid-cols-2 py-8 w-[80%] mx-auto"
		id="about"
	>
		<div class="flex justify-center items-center">
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
			class="before:block before:absolute before:-inset-1 before:translate-x-4 before:translate-y-4 relative inline-block 2xl:before:w-1/2 before:w-full before:m-auto before:card before:variant-ghost-primary"
		>
			<img src={me} alt="me:)" class="2xl:w-1/2 w-full m-auto card relative" />
			<span></span></span
		>
	</div>

	<!-- Information -->
	<div
		id="information"
		class="w-[80%] mx-auto md:grid flex flex-col grid-cols-3 grid-row-3 gap-8 py-8"
	>
		<div class="bento-box flex justify-center">
			<div class="my-auto">
				<h1
					class="bento-heading text-6xl bg-gradient-to-bl from-primary-500 to-secondary-500 bg-clip-text text-transparent"
				>
					3 Years
				</h1>
				<p>Of experience</p>
			</div>
		</div>
		<div class="bento-box col-span-2">
			<h1
				class="bento-heading bg-gradient-to-bl from-primary-500 to-secondary-500 bg-clip-text text-transparent text-8xl"
			>
				500+
			</h1>
			<p>
				Commits on <a href="https://github.com/nevthereal" target="_blank" class="anchor">GitHub</a>
			</p>
		</div>
		<div class="bento-box col-span-2 flex flex-col">
			<div class="text-left m-auto">
				<h1
					class="bento-heading text-4xl md:text-6xl bg-gradient-to-bl from-primary-500 to-secondary-500 bg-clip-text text-transparent"
				>
					Why me?
				</h1>
				<ul class="list-decimal list-inside text-lg md:text-2xl font-semibold">
					<li>Beautifully crafted Websites</li>
					<li>Modern Design</li>
					<li>Keen eye on detail</li>
					<li>Fast response times</li>
				</ul>
			</div>
		</div>
		<div class="bento-box bg-gradient-to-b from-white/25 to-orange-500/25">
			<h1 class="bento-heading text-4xl md:text-6xl">Stack:</h1>
			<ul class="list-disc list-inside text-left text-md font-bold">
				<li><a href="https://kit.svelte.dev" target="_blank">SvelteKit</a></li>
				<li><a href="https://tailwindcss.com" target="_blank">TailwindCSS</a></li>
				<li><a href="https://orm.drizzle.team" target="_blank">Drizzle ORM</a></li>
				<li><a href="https://turso.tech" target="_blank">Turso</a></li>
				<li><a href="https://lucia-auth.com" target="_blank">Lucia Auth</a></li>
			</ul>
		</div>
		<div class="col-span-3 md:grid flex flex-col grid-cols-2 gap-8">
			<div class="bento-box flex">
				<div class="text-left mx-auto flex flex-col">
					<i
						class="fa-solid fa-quote-left text-left text-3xl mx-auto bg-gradient-to-bl from-primary-500 to-secondary-500 bg-clip-text text-transparent"
					></i>
					<p class="text-center text-2xl font-semibold italic">
						Design is not just what it looks like and feels like. Design is how it works. <br />
						<span class="font-normal text-lg">- Steve Jobs</span>
					</p>
				</div>
			</div>
			<div class="bento-box flex justify-center items-center">
				<div>
					<h1
						class="bento-heading text-4xl bg-gradient-to-bl from-primary-500 to-tertiary-500 bg-clip-text text-transparent hover:tracking-widest duration-200 ease-in-out"
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
		<div class="text-center my-8">
			<h1 class="h1 font-black">Timeline</h1>
			<h4 class="h4 font-semibold italic">Key moments</h4>
		</div>
		<div class="w-[80%] mx-auto md:w-[60%] card p-8">
			<Timeline />
		</div>
	</div>
</main>
