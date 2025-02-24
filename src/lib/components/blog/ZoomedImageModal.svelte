<script lang="ts">
    const { isOpen, close, image } = $props();
</script>


{#if isOpen}
    <div class="modal">
        <img src={image} alt="Zoomed-in">
    </div>
{/if}


<style>
    .modal {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 101;

        /* allow click-through to backdrop */
        pointer-events: none;
 
    }
    img {
        max-width: 100%;
        object-fit: contain;
    }
</style>

