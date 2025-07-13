<script lang="ts">
  import { IMAGES_PLACEHOLDERS } from "$lib";
  import { onDestroy, onMount } from "svelte";
  import Images from "./Images.svelte";

  let track: HTMLDivElement;
  const speed = 0.5;
  let animationFrameId: number;
  let pos = 0;

  function animate(scrollWidth: number) {
    pos -= speed;

    if (Math.abs(pos) >= scrollWidth) {
      pos = 0;
    }

    track.style.transform = `translateX(${pos}px)`;
    animationFrameId = requestAnimationFrame(animate);
  }

  onMount(() => {
    const scrollWidth = track.scrollWidth / 2;

    animate(scrollWidth);
  });

  onDestroy(() => {
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
  });
</script>

<div class="flex overflow-hidden w-full">
  <div
    class="flex gap-4"
    bind:this={track}
    onmouseenter={() => cancelAnimationFrame(animationFrameId)}
    onmouseleave={() => animate(track.scrollWidth / 2)}
    role="group"
  >
    {#each [...IMAGES_PLACEHOLDERS, ...IMAGES_PLACEHOLDERS] as img, i (img + i)}
      <Images url={img} />
    {/each}
  </div>
</div>
