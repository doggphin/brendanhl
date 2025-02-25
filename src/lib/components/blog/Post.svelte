<script lang="ts">
    import type { Snippet } from "svelte";
    const { title, date, children } : { title : string, date : string, children : Snippet } = $props();
</script>


<div class="container double-border">
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
    .container {
        position: relative;
        color: var(--clr-primary);
        display: block;
        background-color: var(--clr-secondary);
        width: 100%;
        max-width: 800px;  /* Prevents exceeding 800px */
        min-width: 0; /* Makes sure it doesn't go below 0 */
        border-radius: var(--s8);
        padding: var(--s32);
        border-color: var(--clr-secondary-darker);
        margin: var(--s32) auto;
        box-sizing: border-box;
    }
</style>