<script>
    const { text, spaceBottom = true } = $props();
</script>


<div class={`${spaceBottom ? "space-bottom" : ""}`}>
    {text}
</div>


<style>
    div {
        color: var(--clr-primary);
        text-indent: var(--default-indent);
        line-height: 1.3;
    }
    .space-bottom {
        margin-bottom: var(--small);
    }
</style>