<script lang="ts">
    import { Card } from "./card.ts";
    const { card } : { card : Card} = $props();
</script>


<a href={`${card.link}`} class="double-border">
    <div class="thumbnail">
        <img src={card.image} alt={card.title}>
        <div class="date">{card.date.toDateString().slice(4)}</div>
    </div>
    <div class="card-title">
        {card.title}
    </div>
    <div class="description">
        {card.description}
    </div>
</a>


<style>
    a {
        color: var(--clr-primary);
        width: calc(var(--s128) * 3);
        height: calc(var(--s128) * 2.25);
        background-color: var(--clr-secondary);
        border-radius: var(--s8);
        display: flex;
        flex-direction: column;
        border-color: var(--clr-secondary-darker);
        color: var(--clr-primary);
        text-decoration: none;
        font-style: none;
    }
    .thumbnail {
        position: relative;
        height: calc(var(--s128) * 1.25);
        border-radius: var(--s8);
        width: 100%;
        position: relative;
    }
    .date {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: var(--s8);
        font-size: var(--small-text);
        text-shadow: 1px 1px var(--clr-secondary);
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: var(--s4) var(--s4) 0 0;
        display: block;
    }
    .card-title {
        font-size: var(--medium-text);
        background-color: var(--clr-accent);
        padding: var(--s8);
        padding-left: var(--s16);
        height: 25px;
        text-shadow: 1px 1px var(--clr-secondary);
    }
    .description {
        align-content: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
    }
    .description {
        padding: var(--s8) var(--s16) ;
        display: block;
        text-indent: calc(var(--s16) * 2);
    }
</style>