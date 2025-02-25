<script lang="ts">
    import type { Snippet } from "svelte";
    const { spaceBottom = true, children } : { spaceBottom? : boolean, children : Snippet } = $props();
</script>


<div class={`${spaceBottom ? "space-bottom" : ""}`}>
    {@render children()}
</div>


<style>
    div {
        color: var(--clr-primary);
        text-indent: var(--default-indent);
        line-height: 1.3;
    }
    .space-bottom {
        margin-bottom: var(--s16);
    }
</style>