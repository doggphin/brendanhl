<script lang="ts">
    import OpenInNewTabIcon from "$lib/icons/open_in_new_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";

    const { link, altText } : { link : string, altText : string } = $props();
</script>


<button onclick={() => {window.open(link)}}>
    <img src={OpenInNewTabIcon} style="width: 100%; height: 100%;" alt={altText}/>
</button>


<style>
    button {
        display: inline;
        width: var(--s16);
        height: var(--s16);
        background-color: transparent;
        border: none;
        padding: 0;
        cursor: pointer;
    }
</style>
