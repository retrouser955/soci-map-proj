export let globalRegion = $state({
    currentState: null
} as { currentState: null | string})
export let regionData = $state({
    text: null
}) as { text: null|string };

$effect.root(() => {
    $effect(() => {
        (async () => {
            if(!globalRegion.currentState) return regionData.text = null;
            const url = `/regions/${globalRegion.currentState?.toLocaleLowerCase()}.md`;

            const markdown = await fetch(url);
            if(!markdown.ok) return regionData.text = null;
            
            regionData.text = await markdown.text();
        })()
    })
})