<script lang="ts">
	export let project: TProject;
</script>

<div class="card text-left p-8 flex flex-col justify-between">
	<div>
		<h1 class="h1 font-bold">{project.name}</h1>
		<hr class="border-t my-4" />
		<p class="font-bold font-heading-token">Description</p>
		<p>{project.desc}</p>
		<hr class="border-t my-4" />
		<p class="font-bold font-heading-token">Technologies</p>
		<ul class="disc-list">
			{#each project.tech as tech}
				<li>{tech}</li>
			{/each}
		</ul>
		<hr class="border-t my-4" />
	</div>
	<div>
		<div class="flex gap-4">
			<a href={project.link} class="link-icon" target="_blank"
				><i class="fa-solid fa-globe text-2xl"></i></a
			>
			<a href={project.gHlink} class="link-icon" target="_blank"
				><i class="fa-brands fa-github text-2xl"></i></a
			>
		</div>
	</div>
</div>
