<script lang="ts">
    const START_CHINESE_CHARACTERS = 0x4e00; // Unicode for '一'
    const END_CHINESE_CHARACTERS = 0x9fff;   // Unicode for '龥'

    function getRandomChineseChar(): string {
        const randomCharCode = Math.floor(Math.random() * (END_CHINESE_CHARACTERS - START_CHINESE_CHARACTERS + 1)) + START_CHINESE_CHARACTERS;
        return String.fromCharCode(randomCharCode);
    }

    const GIBBERISH_TEXT_LENGTH = 100;
    const gibberishText: string = Array.from({ length: GIBBERISH_TEXT_LENGTH }, getRandomChineseChar).join('');
</script>

{#snippet gibberishColumn()}
    <div class="section">
        <p>
            {#each gibberishText.split('') as letter}
                <span>{letter}</span>
            {/each}
        </p>
    </div>
{/snippet}
<div class="scroller">
    <div class="scroller-content">
        {@render gibberishColumn()}
        {@render gibberishColumn()}
    </div>
</div>

<style>
    :root {
        --char-height: var(--s64); /* Adjust if necessary */
        --num-chars: 100;
        --section-height: calc(var(--char-height) * var(--num-chars));
    }

    /* The viewport of the scroller with fixed height */
    .scroller {
        height: 100%;
        width: var(--char-height);
        overflow: hidden;
        position: relative;
        font-size: var(--char-height);
        line-height: var(--char-height);
    }
    .scroller span {
        display: block; /* Each letter is on its own line */
    }
    /* Container holding two copies of the text */
    .scroller-content {
        position: absolute;
        width: 100%;
        animation: scroll 10s linear infinite;
    }
    /* Each text block has height as needed to contain the text */
    .section {
        height: var(--section-height);
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        color: var(--clr-primary);
    }
    /* Keyframes: scroll by one section's height */
    @keyframes scroll {
        0% { transform: translateY(0); }
        100% { transform: translateY(calc(var(--section-height) * -1)); }
    }
</style>
