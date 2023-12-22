<script lang="ts">
	let name = 'Neville Brem';
</script>

<div class="flex w-screen h-screen justify-center items-center">
	<div class="flex justify-center flex-col">
		<p class="mx-auto text-8xl font-black">
			{#each name.split('') as char}
				<span class="hover:text-primary-500 ease-in-out duration-200">{char}</span>
			{/each}
		</p>
		<h3 class="mx-auto italic h3 pt-4">
			Bringing <span
				class="before:block before:absolute before:-inset-1 before:skew-y-3 before:bg-secondary-500 relative inline-block"
				><span class="relative">life</span></span
			> to every page
		</h3>
	</div>
</div>
