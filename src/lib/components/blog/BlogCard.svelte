<script lang="ts">
    import { Card } from "./card.ts";
    const { card } : { card : Card} = $props();
</script>


<article class="double-border">
    <div class="thumbnail">
        <img src={card.image} alt={card.title}>
        <div class="date">{card.date.toDateString().slice(4)}</div>
    </div>
    <div class="card-title">
        <a href={`${card.link}`}>
            {card.title}
        </a>
    </div>
    <div class="description">
        <span>{card.description}</span>
    </div>
</article>


<style>
    article {
        color: var(--clr-primary);
        width: calc(var(--s128) * 3);
        height: calc(var(--s128) * 2.25);
        background-color: var(--clr-secondary);
        border-radius: var(--s8);
        display: flex;
        flex-direction: column;
        border-color: var(--clr-secondary-darker);
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
    }
    .card-title a {
        color: var(--clr-primary);
        text-decoration: none;
        font-style: none;
    }
    .description {
        align-content: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
    }
    span {
        padding: var(--s8) var(--s16) ;
        display: block;
        text-indent: calc(var(--s16) * 2);
    }
</style>