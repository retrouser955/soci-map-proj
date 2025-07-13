<script lang="ts">
    let {
        url,
        alt = "placeholder image"
    }: {
        url: string;
        alt?: string;
    } = $props();
</script>

<div class="w-64 h-72 relative">
    <img src={url} {alt} class="w-full top-0 left-0 relative h-full object-cover rounded-lg shadow-md">
</div>