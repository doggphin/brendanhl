<script lang="ts">
    import type { CardInfo } from "$lib/components/blog/card_info";
    import Card from "$lib/components/blog/Card.svelte";

    const cards : CardInfo[] = [
        { title: "Devlog 1", image: "/images/wrongwarp/02-08-2025/thumb.png", link: "02-08-2024", 
        description: "An introduction to my game Wrong Warp! What it's about, its current state, and my future plans for it. And a long ass walkthrough of its netcode :)", date: new Date(2025, 1, 8) },
    ];
</script>


<div class="cardholder">
    {#each cards as card}
        <Card title={card.title} image={card.image} link={`wrongwarp/posts/${card.link}`} description={card.description} date={card.date}/>
    {/each}
</div>


<style>
    .cardholder {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: var(--s32);
        margin-top: var(--s32);
    }
</style>
