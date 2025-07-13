<script lang="ts">
	import '../app.css';
	
	let { children } = $props();
</script>

<div class="h-screen w-screen bg-amber-100">
	{@render children()}
</div>
