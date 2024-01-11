<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<main class="2xl:max-w-[70%] 2xl:mx-auto">
	<div class="text-center">
		<div class="my-16">
			<h1 class="font-heading-token font-black text-7xl">Contact</h1>
			<h4 class="h4 font-semibold italic">Where to find me</h4>
		</div>
	</div>
	<form use:enhance method="POST">
		<input class="input" type="text" name="user_name" />
		<input class="input" type="email" name="user_email" />
		<input class="input" type="text" name="message" />
		<input type="submit" value="Send" />
	</form>
</main>
