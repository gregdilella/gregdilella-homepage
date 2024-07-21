<script lang="ts">
	import ContactBadge from '$lib/components/ContactBadge.svelte';

	const badgeProps: BadgeProps[] = [
		{
			link: 'https://youtube.com/@nevillebrem',
			title: 'YouTube',
			body: 'See code breakdowns and other videos around coding here',
			icon: 'fa-brands fa-youtube'
		},
		{
			link: 'https://www.fiverr.com/nevthereal',
			title: 'Fiverr',
			body: 'Contact me for freelance work',
			icon: 'fa-solid fa-handshake'
		},
		{
			link: 'https://x.com/BremNeville',
			title: 'Twitter',
			body: "I'm on x, btw",
			icon: 'fa-brands fa-x-twitter'
		}
	];
</script>

<div class="text-center">
	<div class="my-16">
		<h1 class="text-7xl font-black font-heading-token">Contact</h1>
		<h4 class="h4 font-semibold italic">Where to find me</h4>
	</div>
</div>

<div class="my-8">
	<h2 class="h2 mb-4 font-bold">Check out my socials</h2>
	<div class="grid grid-rows-3 gap-4 xl:grid-cols-3 xl:grid-rows-1">
		{#each badgeProps as props}
			<ContactBadge {props} />
		{/each}
	</div>
</div>
<p class="text-center font-medium">
	Or directly reach out to me via email: <a class="anchor" href="mailto:contact@nevillebrem.com"
		>contact@nevillebrem.com</a
	>
</p>
