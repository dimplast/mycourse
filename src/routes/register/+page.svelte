<script lang="ts">
	import type { ActionData } from './$types'
	import { Input } from '$lib/components'
	import { applyAction, enhance } from '$app/forms';
	export let form: ActionData;
</script>

<div class="container mx-auto">

	<div class="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
		<div class="mx-auto w-full max-w-sm lg:w-96">
			<div>
				<h1 class="text-3xl font-bold text-center">Register for an account</h1>
			</div>
			<form action="?/register" method="POST" class="flex flex-col space-y-2 w-full pt-6"
			
			use:enhance={() => {
				return async ({ result, update }) => {
					if (result.type === 'failure' || result.type === 'error') {
						await applyAction(result);
					} else {
						//toast.success('Success! Please verify your email before you can login!');
						await update();
					}
				};
			}}	
			>
				<Input id="email" type="email" label="Email" />
				{#if form?.errors?.email}
					{#each form?.errors?.email as error}
						<label for="name" class="label py-0">
							<div class="label-text-alt text-error">{error}</div>
						</label>
					{/each}
				{/if}
				<Input id="password" type="password" label="Password" />
				{#if form?.errors?.password}
					{#each form?.errors?.password as error}
						<label for="name" class="label">
							<div class="label-text-alt text-error">{error}</div>
						</label>
					{/each}
				{/if}
				<div class="w-full pt-3">
					<button type="submit" class="btn btn-filled-primary w-full"> Register </button>
					<p class="pt-4 text-center">
						<span class="text-primary-50/80">
							Or <a href="/login">Login</a> if you already have an account.
						</span>
					</p>
				</div>
			</form>
		</div>
	</div>
	
</div>