<script lang="ts">
	import Project from '$lib/components/Project.svelte';

	const projects: TProject[] = [
		{
			name: 'Vendor Invoice To General Ledger',
			desc: 'An App that scrapes vendor invoices and converts individual costs into general ledger codes using a machine learning algorith and uploading into database.',
			tech: [
				'Python',
				'Pandas',
				'PDFplumber',
				'Tableau Cloud'
			],
			link: null,
			gHlink: 'https://github.com/gregdilella/costinvoicing'
		},
		{
			name: 'Billing Department Automation',
			desc: 'An App to infer billing codes and prices based on job data and directly upload results back into database.',
			tech: ['Python', 'Tableau Cloud', 'Gmail', 'Pandas'],
			link: null,
			gHlink: 'https://github.com/gregdilella/Billing'
		},
		{
			name: 'Accrual Inference',
			desc: 'An App to infer vendor cost accrual.',
			tech: ['Python', 'Tableau Cloud', 'Pandas'],
			link: null,
			gHlink: 'https://github.com/gregdilella/accrualproject'
		},
		{
			name: 'Auto-Voucher and Dispute',
			desc: 'An App to Compare Vendor Actuals with Accruals and Voucher the Matching Line Items. A Line Item Will Also Flag If Profit/Loss Falls Outside Tolereance.  ',
			tech: ['Python', 'Tableau Cloud', 'Pandas'],
			link: null,
			gHlink: null
		},
		{
			name: 'Quoting Tool',
			desc: 'A simple front end website meant to demonstrate the Billing algorithm as a Direct Customer Quoting Tool.',
			tech: ['Python', 'Pandas', 'Streamlit', 'GoogleMaps'],
			link: 'https://sterlingquoting.streamlit.app/',
			gHlink: 'https://github.com/gregdilella/Quoting'
		},
		{
			name: 'Aesthetics Website',
			desc: 'My Wife is planning on opening an aesthetic medicine clinic. Work in Progress.',
			tech: ['Sveltekit', 'Drizzle ORM', 'Typescript', 'TailwindCSS'],
			link: 'https://esthetics-git-main-gregdilellas-projects.vercel.app/',
			gHlink: 'https://github.com/gregdilella/esthetics'
		}
	];
</script>

<svelte:head>
	<title>Greg Dilella- Projects</title>
	<meta name="description" content="Projects of Greg Dilella" />
</svelte:head>

<main class="">
	<div class="text-center">
		<div class="my-16">
			<h1 class="text-4xl md:text-7xl font-black mb-4 animate-in fade-in slide-in-from-left-12 duration-700">
				Projects
			</h1>
			<h4 class="md:text-2xl font-semibold italic animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
				Things I've Created
			</h4>
		</div>
		<p>
			This page only features some of my projects, but you can find all of them on
			<a href="https://github.com/gregdilella" class="anchor" target="_blank">GitHub.</a> 
		</p>
		<br/>
		<p>
			I work in the logistics industry, where I manage and analyze high-volume data generated from daily shipment operations. I'm highly proficient in querying databases and working with big data systems. Beyond data handling, I design and build intelligent algorithms—essentially autonomous agents—on top of databases to extract insights, optimize workflows, and drive operational decisions.  
		</p>
		<div class="my-16 flex grid-cols-2 flex-col gap-8 xl:grid">
			{#each projects as project}
				<Project {project} />
			{/each}
		</div>
	</div>
</main>
