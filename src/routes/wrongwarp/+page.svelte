<script lang="ts">
    import { Card } from "$lib/components/blog/card.ts"
    import BlogCard from "$lib/components/blog/BlogCard.svelte";

    const datesToDescriptions : Map<Date, string> = new Map([
        [new Date(2025, 2, 25), "Chunk rewrite, inventories, chat, and a couple other things"],
        [new Date(2025, 2, 8), "An introduction to my game Wrong Warp! What it's about, its current state, and my future plans for it. And a long ass walkthrough of its netcode :)"],
    ]);

    const cards : Card[] = Array.from(datesToDescriptions, ([date, description], i) => {
        const dateString = `${(date.getMonth()).toString().padStart(2, "0")}-` +
                            `${date.getDate().toString().padStart(2, "0")}-` +
                            `${date.getFullYear().toString()}`;

        
        const ret = new Card(
            `Devlog ${datesToDescriptions.size - i}`,
            `/images/wrongwarp/${dateString}/thumb.png`,
            `/wrongwarp/posts/${dateString}`,
            description,
            date
        );

        console.log(ret.image);
Card
        return ret;
    });
</script>


<div class="cardholder">
    {#each cards as card}
        <BlogCard card = {card}/>
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
