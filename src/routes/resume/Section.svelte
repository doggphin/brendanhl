<script lang="ts">
    import type { Snippet } from "svelte";

    const { title, children } : { title : string, children : Snippet } = $props();
</script>


<div class="container">
    <div class="title">{title}</div>
    {@render children()}
</div>


<style>
    .container {
        display: block;
    }
    .title {
        display: block;
        font-size: var(--s24);
        margin: var(--s16) 0;
    }
</style>
