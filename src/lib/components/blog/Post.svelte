<script lang="ts">
    const { title, date } = $props();
</script>


<div class="container">
    <div class="title">
        <h1>{title}</h1>
    </div>
    <span class="date">
        <h2>{date}</h2>
    </span>
    <div class="contents">
        <slot/>
    </div>
</div>


<style>
    .container {
        color: var(--clr-primary);
        display: block;
        background-color: var(--clr-secondary);
        width: max(80vw, calc(100% - calc(var(--large) * 4)));
        margin: var(--medium) auto;
        border-radius: var(--tiny);
        padding: var(--medium);
    }
    .title {
        text-align: center;
        font-size: var(--huge-text);
        margin-bottom: var(--tiny);
    }
    .date {
        text-align: center;
    }
    .contents {
        margin-top: var(--medium);
    }

</style>