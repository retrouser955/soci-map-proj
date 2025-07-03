<script lang="ts">
  import * as d3 from "d3";
  import { onMount } from "svelte";

  let svgEle: SVGElement;

  onMount(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
  });
</script>

<div class="w-screen h-screen">
  <svg bind:this={svgEle}></svg>
</div>
