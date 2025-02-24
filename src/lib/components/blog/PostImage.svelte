<script lang="ts">
    import { modals } from 'svelte-modals';
    import ZoomedImageModal from "./ZoomedImageModal.svelte";

    const { title, image, height = 315, spaceBottom = true } : 
    { title : string, image : string, height? : number, spaceBottom? : boolean} = $props();

    function handleClick() {
        // @ts-ignore
        modals.open(ZoomedImageModal, { image: image })
    }
</script>


<div class = {`container ${spaceBottom ? "space-bottom" : ""}`}>
    <div class="title">{title}</div>
    <button class="image-container" onclick={handleClick}>
        <img class="main-image" style={`${height ? `height: ${height}px` : ""}`} 
        src={image} alt={title}>
    </button>
</div>


<style>
    .container {
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .title {
        font-style: italic;
        text-align: center;
        margin-bottom: var(--s8);
    }
    .image-container {
        display: block flex;
        justify-content: center;
        padding: 0;
        border: none;
        background-color: var(--clr-secondary);
    }
    .main-image {
        object-fit: contain;
        width: 100%;
        cursor: pointer;
    }
    .space-bottom {
        margin-bottom: var(--s32);
    }
</style>