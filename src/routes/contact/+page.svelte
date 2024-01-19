<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';
	import ContactBadge from '$lib/components/ContactBadge.svelte';

	export let data: PageData;
	const { form, enhance, errors, message, delayed } = superForm(data.form, {
		resetForm: true,
		delayMs: 0
	});
</script>

<main class="2xl:max-w-[50%] 2xl:mx-auto mx-8">
	<div class="text-center">
		<div class="my-16">
			<h1 class="font-heading-token font-black text-7xl">Contact</h1>
			<h4 class="h4 font-semibold italic">Where to find me</h4>
		</div>
	</div>

	<div class="my-8">
		<h2 class="h2 font-bold mb-4">Check out my socials</h2>
		<div class="grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-4">
			<ContactBadge
				link="https://instagram.com/nevillebrem"
				title="Instagram"
				body="I occasinally post some nice pics"
				icon="fa-brands fa-instagram"
			/>
			<ContactBadge
				link="https://youtube.com/@nevillebrem"
				title="YouTube"
				body="See code breakdowns and other videos around coding here"
				icon="fa-brands fa-youtube"
			/>
			<ContactBadge
				link="https://x.com/BremNeville"
				title="Twitter"
				body="I use x, btw"
				icon="fa-brands fa-x-twitter"
			/>
		</div>
	</div>

	<div class="my-8">
		<h2 class="h2 font-bold mb-4">Contact me</h2>
		<form method="POST" use:enhance class="flex flex-col gap-4 card p-6">
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
			<button class="btn variant-filled-primary mx-auto font-bold"
				>{#if !$delayed}
					Submit!
				{:else}
					Loading ...
				{/if}</button
			>
		</form>
	</div>
</main>
