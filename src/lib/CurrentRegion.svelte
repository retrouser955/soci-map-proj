<script lang='ts'>
  import { browser } from "$app/environment";
  import { globalRegion } from "$lib/GlobalState.svelte";
  import PlaceholderCarousel from "./Carousel/PlaceholderCarousel.svelte";
</script>

<div class="w-full h-[70%]">
  {#if !globalRegion.currentState}
    <div>
      <h1 class="text-4xl font-serif text-yellow-900 font-bold">Select a State or Region</h1>
      <p class="my-4 text-lg">No States or Regions currently selected. Click on any one of the states or regions to get started.</p>
      {#if browser}
        <PlaceholderCarousel />
      {/if}
    </div>
  {:else}
    {globalRegion.currentState}
  {/if}
</div>