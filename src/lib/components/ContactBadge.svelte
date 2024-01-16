<script lang="ts">
	export let icon: string;
	export let link: string;
	export let title: string;
	export let body: string;
</script>

<a href={link} target="_blank" class="card flex gap-4 p-4">
	<div class="chip text-2xl"><i class={icon}></i></div>
	<div class="my-auto">
		<h3 class="h3 font-bold">{title}</h3>
		<p>{body}</p>
	</div>
</a>
