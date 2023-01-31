<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface $$Props extends HTMLInputAttributes {
		id: string
		label: string
	}
	export let id: string
	export let label: string
</script>

<div class="form-control">
	<label for={id} class="label">
		<span class="label-text">
			{label}
		</span>
		<input name={id} {...$$restProps} class="input input-bordered">
	</label>
</div>


