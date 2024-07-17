<script lang="ts">
	export let props: BadgeProps;
</script>

<a href={props.link} target="_blank" class="card flex gap-4 p-4" id="card">
	<div class="chip text-2xl">
		<i class={props.icon}></i>
	</div>
	<div class="my-auto">
		<h3 class="h3 font-bold">{props.title}</h3>
		<p class="hidden md:block">{props.body}</p>
	</div>
</a>
