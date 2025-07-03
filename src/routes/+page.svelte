<script lang="ts">
  import Myanmar from "$lib/Myanmar.svelte";
  import { onMount } from "svelte";

  onMount(() => {
    const svgSelector = document.querySelectorAll("svg g path[name]");
    const zoomGroup = document.querySelector("#features") as SVGGElement;
    const svg = document.querySelector("#map") as SVGSVGElement;

    let currentZoom: string | null = null;
    let lastPath: SVGPathElement | null = null;

    for (const path of svgSelector) {
      (path as SVGPathElement).addEventListener("click", () => {
        const bbox = (path as SVGPathElement).getBBox();

        if(lastPath && lastPath.classList.contains("current-focused")) {
            lastPath.classList.remove("current-focused");
        }

        path.classList.add("current-focused")

        if(path.getAttribute("name")! === currentZoom) {
            zoomGroup.setAttribute("transform", "scale(1) translate(0, 0)")
            path.classList.remove("current-focused")
            lastPath = null;
            currentZoom = null;
            return;
        }

        // Calculate translate needed to center the path
        const x = bbox.x;
        const y = bbox.y;

        const zoomScale = 3;

        const tx =
          -x + (svg.viewBox.baseVal.width / zoomScale - bbox.width) / 2;
        const ty =
          -y + (svg.viewBox.baseVal.height / zoomScale - bbox.height) / 2;

        zoomGroup.setAttribute(
          "transform",
          `scale(${zoomScale}) translate(${tx}, ${ty})`
        );

        lastPath = path as SVGPathElement;
        currentZoom = path.getAttribute("name");
      });
    }
  });
</script>

<div class="w-screen h-screen flex justify-center items-center">
  <Myanmar />
</div>
