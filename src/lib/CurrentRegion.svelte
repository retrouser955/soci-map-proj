<script lang='ts'>
  import { globalRegion, regionData } from "$lib/GlobalState.svelte";
  import SvelteMarkdown from "svelte-markdown";
</script>

<div class="w-[30%] h-screen">
  {globalRegion.currentState}
  {#if regionData.text}
    <div class="prose">
      <SvelteMarkdown source={regionData.text} />
    </div>
  {/if}
</div>