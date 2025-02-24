<script lang="ts">
    import type { Snippet } from "svelte";
    const { title, date, children } : { title : string, date : string, children : Snippet } = $props();
</script>


<div class="container">
    {#if title}
        <div class="title">
            <h1>{title}</h1>
        </div>
    {/if}
    {#if date}
        <span class="date">
            <h2>{date}</h2>
        </span>
    {/if}
    <div class="contents">
        {@render children()}
    </div>
</div>


<style>
    .container {
        color: var(--clr-primary);
        display: block;
        background-color: var(--clr-secondary);
        width: min(800px, max(80vw, calc(100% - calc(var(--s64) * 4))));
        margin: var(--s32) auto;
        border-radius: var(--s8);
        padding: var(--s32);
    }
    .title {
        text-align: center;
        font-size: var(--s48);
        margin-bottom: var(--s8);
    }
    .date {
        text-align: center;
    }
    .contents {
        margin-top: var(--s32);
    }

</style>