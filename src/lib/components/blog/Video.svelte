<script>
    const { link, title = "", spaceBottom = true } = $props();
</script>


<div class="container">
    <div class="title">{title}</div>
    <div class={`video-container ${spaceBottom ? "space-bottom" : ""}`}>
        <iframe width="560" height="315" src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
</div>


<style>
    .container {
        width: 100%;
        margin: var(--medium) 0;
    }

    .title {
        color: var(--clr-primary);
        text-align: center;
        margin-bottom: var(--tiny);
        font-style: italic;
    }
    .video-container {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .space-bottom {
        margin-bottom: var(--small);
    }
</style>