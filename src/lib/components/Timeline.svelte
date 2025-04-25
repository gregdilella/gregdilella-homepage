<script lang="ts">
	import { goto } from '$app/navigation';
	import { Step, Stepper, getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';

	const completeModal: ModalSettings = {
		type: 'confirm',
		title: 'That was my story!',
		body: 'Want to see my Projects?',
		buttonTextConfirm: 'Yes',
		buttonTextCancel: "No, I'd rather stay here",
		response: (e) => {
			if (e) {
				goto('/projects');
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
		<svelte:fragment slot="header">2011</svelte:fragment>
		Graduated With a Degree in Electrical and Computer Engineering.
	</Step>
	<Step>
		<svelte:fragment slot="header">2018</svelte:fragment>
		Finish MBA and Start Working For the Management Team at Global Logistics Company.
	</Step>
	<Step>
		<svelte:fragment slot="header">2020</svelte:fragment>
		Covid Hits and I Am Forced To Spend a Few Months at Home. Passed CFA level 1 and Began Coding Data Science Applications. 
	</Step>
	<Step>
		<svelte:fragment slot="header">2021</svelte:fragment>
		Created an App to Interact with Company Backend to Automate the Cost Input / Invoice Processing Department. 20 FTEs. 
	</Step>
	<Step>
		<svelte:fragment slot="header">2023</svelte:fragment>
		Created Billing Department Automation. 15 FTEs.
	</Step>
	<Step>
		<svelte:fragment slot="header">2024</svelte:fragment>
		Started Learning Typescript and Sveltekit in Order to Build Full Stack Web Applications.
	</Step>
	<Step>
		<svelte:fragment slot="header">2025</svelte:fragment>
		Started Hosting AI Agents In a Server To Sit On Top of Company Database and Automate Financial Backend Applications.
	</Step>
</Stepper>
