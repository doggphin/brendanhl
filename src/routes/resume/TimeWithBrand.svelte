<script lang="ts">
    import type { Snippet } from "svelte";
    import OpenInNewTabIcon from "$lib/icons/open_in_new_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";

    interface Props {
        company : string,
        position : string,
        icon : string,
        link? : string | undefined,
        time : string,
        children : Snippet
    }

    const { company, position, icon, link = undefined, time, children } : Props = $props();
</script>


<div class="container">
    <div class="left-container">
        <div class="icon-container double-border">
            <img src={icon} alt={company}/>
        </div>
        <ol class="texts-container">
            <li style="font-size: var(--s24);">
                {company}
                {#if link !== undefined}
                    <button onclick={() => {window.open(link)}}>
                        <img src={OpenInNewTabIcon} style="width: 100%; height: 100%;" alt={`Open link to ${company}`}/>
                    </button>
                {/if}
            </li>
            <li>
                {position}
            </li>
            <li>
                {@render children()}
            </li>
        </ol>
    </div>
    <div class="right-container">
        {time}
    </div>
</div>


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
    .container {
        width: 100%;
        margin: var(--s16) 0;
        display: flex;
        justify-content: space-between;
    }
    .left-container {
        display: flex;
        justify-content: left;
    }

    @media only screen and (min-width: 501px) {
        .right-container {
            white-space: nowrap;
        }
    }
    

    .icon-container {
        width: var(--s64);
        height: var(--s64);
        min-width: var(--s64);
        min-height: var(--s64);
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        border-radius: 50%;
        border-color: var(--clr-secondary-darker);
        margin-right: var(--s8);
    }
    img {
        width: 71%;
        height: 71%;
        margin-top: 0px;
    }

    .texts-container {
        display: inline-flex;
        flex-direction: column;
        gap: var(--s4);
        margin-left: var(--s4);
    }
</style>
