<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';
	import ContactBadge from '$lib/components/ContactBadge.svelte';

	export let data: PageData;
	const { form, enhance, errors, message, delayed } = superForm(data.form, {
		resetForm: true,
		delayMs: 0
	});

	const badgeProps = [
		{
			link: 'https://youtube.com/@nevillebrem',
			title: 'YouTube',
			body: 'See code breakdowns and other videos around coding here',
			icon: 'fa-brands fa-youtube'
		},
		{
			link: 'https://x.com/BremNeville',
			title: 'Twitter',
			body: 'I use x, btw',
			icon: 'fa-brands fa-x-twitter'
		},
		{
			link: 'https://instagram.com/nevillebrem',
			title: 'Instagram',
			body: 'I occasionally post some nice pics',
			icon: 'fa-brands fa-instagram'
		}
	];
</script>

<main class="mx-8 md:mx-auto md:max-w-[50%]">
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
				<ContactBadge link={props.link} title={props.title} body={props.body} icon={props.icon} />
			{/each}
		</div>
	</div>

	<div class="my-8">
		<h2 class="h2 mb-4 font-bold">Contact me</h2>
		<form method="POST" use:enhance class="card flex flex-col gap-4 p-6">
			<div class="flex flex-col gap-2">
				<label for="user_name">Name</label>
				<input class="input" bind:value={$form.user_name} type="text" name="user_name" />
				{#if $errors.user_name}
					<span class="text-error-500">{$errors.user_name}</span>
				{/if}
			</div>
			<div class="flex flex-col gap-2">
				<label for="user_email">Email</label>
				<input class="input" bind:value={$form.user_email} type="email" name="user_email" />
				{#if $errors.user_email}
					<span class="text-error-500">{$errors.user_email}</span>
				{/if}
			</div>
			<div class="flex flex-col gap-2">
				<label for="message">Message</label>
				<input class="input" bind:value={$form.message} type="text" name="message" />
				{#if $errors.message}
					<span class="text-error-500">{$errors.message}</span>
				{/if}
			</div>
			{#if $message}
				<span class="text-warning-500">{$message}</span>
			{/if}
			<button class="variant-filled-primary btn mx-auto font-bold"
				>{#if !$delayed}
					Submit!
				{:else}
					Loading ...
				{/if}</button
			>
		</form>
	</div>
</main>
