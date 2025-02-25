<script lang="ts">
    const { link, title = "", spaceBottom = true } : { link : string, title? : string, spaceBottom? : boolean } = $props();
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
        margin: var(--s32) 0 0;
    }

    .title {
        color: var(--clr-primary);
        text-align: center;
        margin-bottom: var(--s8);
        font-style: italic;
    }

    .video-container {
        width: 100%;
        display: flex;
        justify-content: center;
        position: relative;
        padding-top: 56.25%; /* Maintain 16:9 aspect ratio */
    }

    .video-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
    }

    .space-bottom {
        margin-bottom: var(--s32);
    }
</style>