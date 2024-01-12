<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';

	export let data: PageData;

	const { form, enhance, errors } = superForm(data.form, {
		resetForm: false
	});
</script>

<main class="2xl:max-w-[50%] 2xl:mx-auto">
	<div class="text-center">
		<div class="my-16">
			<h1 class="font-heading-token font-black text-7xl">Contact</h1>
			<h4 class="h4 font-semibold italic">Where to find me</h4>
		</div>
	</div>
	<form method="POST" use:enhance class="flex flex-col gap-4">
		<div class="flex flex-col gap-2">
			<label for="name">Name</label>
			<input class="input" bind:value={$form.name} type="text" name="name" />
			{#if $errors.name}
				<span class="text-error-500">{$errors.name}</span>
			{/if}
		</div>
		<div class="flex flex-col gap-2">
			<label for="email">Email</label>
			<input class="input" bind:value={$form.email} type="email" name="email" />
			{#if $errors.email}
				<span class="text-error-500">{$errors.email}</span>
			{/if}
		</div>
		<div class="flex flex-col gap-2">
			<label for="message">Message</label>
			<input class="input" bind:value={$form.message} type="text" name="message" />
			{#if $errors.message}
				<span class="text-error-500">{$errors.message}</span>
			{/if}
		</div>
		<button class="btn variant-filled-primary mx-auto">Submit!</button>
	</form>
</main>
