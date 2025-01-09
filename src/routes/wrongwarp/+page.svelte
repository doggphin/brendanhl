<script lang="ts">
    import type { CardInfo } from "$lib/components/blog/CardInfo.ts";
    import Card from "$lib/components/blog/Card.svelte";

    const cards : CardInfo[] = [
        { title: "Devlog 1", image: "/images/wrongwarp/01-08-2025.png", link: "01-08-2024", 
        description: "An introduction to my game Wrong Warp, its current state, and my future plans for it.", date: new Date(2025, 1, 8) },
    ];
</script>


<div class="cardholder">
    {#each cards as card}
        <Card title={card.title} image={card.image} link={card.link} description={card.description} date={card.date}/>
    {/each}
</div>


<style>
    .cardholder {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: var(--medium);
        margin-top: var(--medium);
    }
</style>
