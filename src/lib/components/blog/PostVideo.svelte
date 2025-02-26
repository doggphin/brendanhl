<script lang="ts">
    const { link, title = "", spaceBottom = true } : { link : string, title? : string, spaceBottom? : boolean } = $props();
</script>


<div class="container" style="{spaceBottom ? "margin-bottom: var(--s32)" : ""}">
    {#if title}
        <div class="title">{title}</div>
    {/if}
    <video controls>
        <source src={link} type="video/mp4"/>
        <track kind="captions">
    </video>
</div>


<style>
    .container {
        margin: var(--s32) 0 0 0;
    }

    .title {
        color: var(--clr-primary);
        text-align: center;
        margin-bottom: var(--s8);
        font-style: italic;
    }

    video {
        display: block;
        margin: 0 auto;
        width: 100%;
    }
</style>