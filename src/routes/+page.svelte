<script lang="ts">
	import me from '$lib/assets/me.png?enhanced';
	import Timeline from '$lib/components/Timeline.svelte';


	import { onMount } from 'svelte';
  	let show = false;

  	onMount(() => {
    const timeout = setTimeout(() => {
      show = true;
    }, 100); // 0.2s delay
    return () => clearTimeout(timeout);
  });

</script>

<svelte:head>
	<title>Greg DiLella - Home</title>
	<meta name="description" content="The Homepage of Greg Dilella" />
	<meta property="og:title" content="Greg Dilella" />
	<meta property="og:image" content="banner.png" />
	<meta property="og:description" content="Homepage of Greg Dilella" />
	<meta property="og:url" content="https://www.gregdilella.com" />

</svelte:head>

  
<!-- Hero Section -->
<section class="flex justify-center items-start pt-5 py-10 md:pt-20">
	<div class="flex flex-col items-center">
		<h1 class="text-8xl md:text-10xl font-black mb-4 animate-in fade-in slide-in-from-left-12 blur-in duration-700">
			Greg DiLella
		</h1>

		<h3 class="text-center text-xl md:text-2xl font-semibold italic animate-in fade-in slide-in-from-bottom-8 delay-200 animate-blur-in">
			<span
				class="font-extrabold text-primary-500 duration-200 ease-in-out hover:tracking-widest hover:text-green-500"
			>
				Full
			</span>
			Stack Developer and
			<span
				class="font-extrabold text-primary-500 duration-200 ease-in-out hover:tracking-widest hover:text-blue-500"
			>
				Finance
			</span>
			Nerd
		</h3>
	</div>
</section>

  
  <!-- About Section -->
  <section id="about">
	<div class="mx-auto max-w-6xl px-6 md:grid md:grid-cols-2 md:gap-8 items-center">
		<div>
			<h1 class="text-4xl font-black mb-4">About me</h1>
			<p class="text-lg leading-relaxed text-balance">
				Hey, I'm Greg DiLella — a Full Stack Engineer and Analyst from Canada with a passion for programming,
				finance, and all things tech. When I'm not coding, you'll find me on the Jiu Jitsu mats, playing hockey,
				or walking the dogs with my wife.
			</p>
		</div>

		<enhanced:img
			src={me}
			alt="me:)"
			loading="lazy"
			class="max-w-xs md:max-w-sm border-2 border-base-300 rounded-2xl animate-in fade-in slide-in-from-left-12 blur-in duration-700 mx-auto"
		/>
	</div>
</section>

  

<!-- Information -->
<section id="information" class="grid-row-3 mx-auto flex grid-cols-3 flex-col gap-8 py-8 md:grid">
	<div class="bento-box flex justify-center">
	  <div class="my-auto">
		<h1 class="bento-heading bg-gradient-to-bl from-primary-500 to-secondary-500 bg-clip-text text-4xl text-transparent md:text-6xl">

		  6 Years
		</h1>
		<p class="list-inside text-lg font-semibold md:text-xl space-y-1">Of Developper Experience</p>
	  </div>
	</div>
  
	<div class="bento-box col-span-2 flex flex-col">
	  <div class="m-auto text-left">
		<h1
		  class="bento-heading bg-gradient-to-bl from-primary-500 to-secondary-500 bg-clip-text text-4xl text-transparent md:text-6xl"
		>
		  Why me?
		</h1>
		<ul class="list-inside text-lg font-semibold md:text-xl space-y-1">
		  <li>Most Developers Don't Do Finance and Accounting</li>
		  <li>Most Finance People Can't Code</li>
		  <li>Web Dev and Front End Capable</li>
		  <li>A.I. First Mindset</li>
		</ul>
	  </div>
	</div>
  </section>
  
  <div>
	<!-- Stack Section -->
	<div class="flex justify-center">
	  <div class="bento-box flex justify-center w-full md:w-[60%]">
		<div class="my-auto w-full">
		  <h1 class="bento-heading bg-gradient-to-bl from-primary-500 to-secondary-500 bg-clip-text text-4xl text-transparent md:text-6xl">
			Stack:
		  </h1>
		  <ul class="text-md text-lg font-bold md:text-xl space-y-1">
			<li><a href="https://python.org" target="_blank">Python</a></li>
			<li><a href="https://pandas.pydata.org" target="_blank">Pandas</a></li>
			<li><a href="https://kit.svelte.dev" target="_blank">SvelteKit</a></li>
			<li><a href="https://tailwindcss.com" target="_blank">Tailwindcss</a></li>
			<li><a href="https://orm.drizzle.team" target="_blank">Drizzle ORM</a></li>

			<li><a href="https://www.tableau.com/" target="_blank">Tableau</a></li>
		  </ul>
		</div>
	  </div>
	</div>
  
	<!-- Timeline -->
	<section class="my-16">
	  <div class="my-8 text-center">
		<h1 class="h1 font-black">Timeline</h1>
		<h4 class="h4 font-semibold italic">Key moments</h4>
	  </div>
	  <div class="card mx-auto p-8 md:w-[60%]">
		<Timeline />
	  </div>
	</section>
  </div>
  
  