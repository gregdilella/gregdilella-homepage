<script lang="ts">
	import { goto } from '$app/navigation';
	import { Step, Stepper, getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';

	const completeModal: ModalSettings = {
		type: 'confirm',
		title: 'That was my story!',
		body: 'Want to see my Projects?',
		response: (e) => {
			if (e) {
				goto('/work');
			}
		}
	};
	const modalStore = getModalStore();
</script>

<Stepper
	stepTerm=""
	buttonCompleteLabel="That's it!"
	buttonCompleteType="reset"
	on:complete={() => modalStore.trigger(completeModal)}
>
	<Step>
		<svelte:fragment slot="header">Early 2022</svelte:fragment>
		Learned HTML and CSS in School. This was my first contact with Web Development and would change my
		life for the better.
	</Step>
	<Step>
		<svelte:fragment slot="header">July 2022</svelte:fragment>
		Discovered GitHub and created my first
		<a href="https://github.com/nevthereal/TheCreators" target="_blank" class="anchor">Repository</a
		>. I was still building in vanilla HTML and CSS (and rocked animations) but was too scared to
		learn JavaScript.
	</Step>
	<Step>
		<svelte:fragment slot="header">Summer 2022</svelte:fragment>
		Got into React and built my first
		<a href="https://github.com/nevthereal/portfolio-react" target="_blank" class="anchor"
			>Portfolio.</a
		>
		I also discovered Tailwind and began one of my most meaningful projects:
		<a href="https://wolffebricks.store" target="_blank" class="anchor">Will's Brix</a>, now known
		as Wolffe Bricks.
	</Step>
	<Step>
		<svelte:fragment slot="header">Summer 2023</svelte:fragment>
		After a long break of coding, I got back into development. Rebranded Wolffe Bricks and rebuilt the
		website with Stripe and built a backend in expressjs. Later I discovered TypeScript and built my
		<a href="https://barmates.netlify.app" target="_blank" class="anchor">favorite landing page</a> utilising
		framer-motion.
	</Step>
	<Step>
		<svelte:fragment slot="header">Fall 2023</svelte:fragment>
		Discovered SvelteKit and built some first applications with it.
	</Step>
	<Step>
		<svelte:fragment slot="header">Early 2024</svelte:fragment>
		Rocking my first Full Stack Projects. You can discover these on the
		<a href="/work" class="anchor">Work</a> page. I als learned Astro for more content-driven and static
		pages like landing pages.
	</Step>
</Stepper>
