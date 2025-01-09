<script lang="ts">
    import type { CardInfo } from "./CardInfo.ts";
    const { title, image, link, description, date } : CardInfo = $props();
</script>


<article>
    <div class="thumbnail">
        <img src={image} alt={title}>
        <div class="date">{date.toDateString().slice(4)}</div>
    </div>
    <div class="card-title">
        <a href={`wrongwarp/${link}`}>
            {title}
        </a>
    </div>
    <div class="description">
        <span>{description}</span>
    </div>
</article>


<style>
    article {
        color: var(--clr-primary);
        width: calc(var(--big) * 3);
        height: calc(var(--big) * 2.25);
        background-color: var(--clr-secondary);
        border-radius: var(--tiny);
        display: flex;
        flex-direction: column;
    }
    .thumbnail {
        position: relative;
        height: calc(var(--big) * 1.25);
        width: 100%;
        position: relative;
    }
    .date {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: var(--tiny);
        font-size: var(--small-text);
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: var(--tiny) var(--tiny) 0 0;
        display: block;
    }
    .card-title {
        font-size: var(--medium-text);
        background-color: var(--clr-accent);
        padding: var(--tiny);
        padding-left: var(--small);
        height: 25px;
    }
    .card-title a {
        color: var(--clr-background);
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
        padding: var(--tiny) var(--small) ;
        display: block;
        text-indent: calc(var(--small-text) * 2);
    }
</style>