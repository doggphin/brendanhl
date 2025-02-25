<script lang="ts">
    import './reset.css';
    import './base.css';
    import { Modals } from 'svelte-modals';
    import { page } from '$app/state';
    import GithubIcon from './layout/github-icon-color.svg';
    import LinkedinIcon from './layout/linkedin-icon-color.svg';
    import YoutubeIcon from './layout/youtube-color.svg';
    import ScrollingText from '$lib/components/cool-stuff/ScrollingText.svelte';
    import ld from "lodash";
    
    const DEFAULT_TITLE = "Brendan Lancaster";

    let pageTitle = $state("Brendan Lancaster");

    let RANDOM_TITLES = [
        "Hi hello",
        "hi hi hello :)))",
        "welcom 2 my site",
        "i'm in your computer...",
        "anyone else online??",
        "sub 2 my youtube",
        "you should shower",
        "behind you",
        "can u see this",
        "whattup",
    ];
    RANDOM_TITLES = ld.shuffle(RANDOM_TITLES);
    const WPM = 140;
    const SECONDS_PER_CHARACTER = (60 / WPM) / 5;

    const randomFloat = (x : number, y : number) => Math.random() * (y - x) + x;
    const waitForSeconds = async(time : number) => await new Promise(r => setTimeout(r, time * 1000));

    async function typeNewTitle(newTitle : string) {
        pageTitle = "";
        for(var character of newTitle) {
            pageTitle += character;
            await waitForSeconds(SECONDS_PER_CHARACTER * randomFloat(0.5, 1.5));
        }
    }
    async function clearTitle() {
        pageTitle = pageTitle.slice(0, -1);
        await waitForSeconds(0.45);
        while(pageTitle.length > 0) {
            await waitForSeconds(0.04);
            pageTitle = pageTitle.slice(0, -1);
        }
        pageTitle = "|";
    }
    let randomTitleIndex = 0;
    async function setFunnyTitles() {
        await waitForSeconds(randomFloat(3, 10));
        await clearTitle();
        await waitForSeconds(randomFloat(1, 3));
        await typeNewTitle(RANDOM_TITLES[randomTitleIndex]);
        randomTitleIndex = (randomTitleIndex + 1) % RANDOM_TITLES.length;
        await waitForSeconds(randomFloat(3, 10));
        await clearTitle();
        await waitForSeconds(randomFloat(1, 2));
        await typeNewTitle(DEFAULT_TITLE);
        setFunnyTitles();
    }
    setFunnyTitles();


    interface NavbarTab {
        name: string;
        link: string;
    };
    const navbarTabs : NavbarTab[] = [
        { name: "Projects", link: "/projects" },
        { name: "Wrong Warp", link: "/wrongwarp" },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" },
    ];

    interface NavbarMedia {
        image: string;
        link: string;
        alt: string;
    };
    const navbarMedias : NavbarMedia[] = [
        { image: LinkedinIcon, link: "https://www.linkedin.com/in/brendan-lancaster/", alt: "LinkedIn" },
        { image: GithubIcon, link: "http://github.com/doggphin", alt: "GitHub" },
        { image: YoutubeIcon, link: "https://youtube.com/@doggphin", alt: "YouTube" },
    ];

    const { children } = $props();
</script>


<svelte:head>
    <title>{pageTitle}</title>
</svelte:head>
<Modals>
    <!-- svelte-ignore element_invalid_self_closing_tag -->
    {#snippet backdrop({close})}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div
            class="backdrop"
            onclick={() => close()}
        />
    {/snippet}
</Modals>
<div class="double-border navbar">
    <div class="navbar-container">
        <div class="brand unselectable">
            <span>Brendan H. Lancaster</span>
        </div>
        <nav class="navbar-items-container">
            <ul class="navbar-pages">
                {#each navbarTabs as navbarTab}
                    {@const isSelected : Boolean = navbarTab.link == page.url.pathname}
                    <a class="navbar-page {isSelected ? "navbar-page-selected" : "" } unselectable" href={navbarTab.link}>
                        <span>{navbarTab.name}</span>
                    </a>     
                {/each}
            </ul>
            <ul class="navbar-medias">
                {#each navbarMedias as navbarMedia}
                    <li class="navbar-media-choice">
                        <a href={navbarMedia.link}>
                            <img src={navbarMedia.image} alt={navbarMedia.alt}>
                        </a>
                    </li>
                {/each}
            </ul>
        </nav>
    </div>
</div>
<div class="navbar-bottom-line"></div>
<div class="spacer"></div>
<div class="body">
    {@render children()}
</div>
{#snippet textScroller(side : string)}
    <div class="text-scroller" style={`${side == "left" ? "left" : "right"}: var(--s16); transform: rotate(${side == "left" ? "-2" : "2"}deg)`}>
        <ScrollingText/>
    </div>
{/snippet}
{@render textScroller("left")}
{@render textScroller("right")}


<style>
    :root {
        background-color: var(--clr-background);
        --navbar-height: 105px;
        --navbar-bottom-line-height: var(--s4);
    }
    .text-scroller {
        position: fixed;
        top: 0;
        bottom: 0;
        z-index: -1;
    }
    .backdrop {
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        inset: 0 0 0 0;
        z-index: 100;
    }
    .navbar {
        position: fixed;
        inset: 0 0 auto 0;
        height: var(--navbar-height);
        background: var(--clr-secondary-darker);
        background: radial-gradient(circle, var(--clr-secondary) 0%, var(--clr-secondary-darker) 100%);
        display: flex;
        justify-content: center;
        z-index: 1;
        border-color: var(--clr-secondary-darker);
        border-width: 0 0 var(--s4) 0;
    }
    .navbar-container {
        width: max(500px, 50%);
    }
    @media only screen and (max-width: 500px) {
        .navbar-container {
            width: 90%;
        }
    }
    .brand {
        color: var(--clr-primary);
        margin: var(--s16) 0 0 var(--s32);
        font-size: var(--s24);
    }

    .navbar-items-container {
        display: flex;
        justify-content: space-between;
        height: var(--s64);
    }
    .navbar-pages {
        display: flex;
        gap: var(--s8);
        margin: auto auto auto calc(var(--s32) - var(--s8));
    }
    .navbar-page {
        transition-duration: var(--t2);
        color: var(--clr-primary);
        text-decoration-line: none;
        padding: var(--s8);
        border-radius: var(--s8);
    }
    .navbar-page:hover {
        transition-duration: var(--t2);
        background-color: var(--clr-muted);
    }
    .navbar-page-selected {
        color: var(--clr-muted);
        text-decoration-line: underline;
        pointer-events: none;
    }
    .navbar-page-selected:hover {
        background-color: var(--clr-secondary);
    }

    .navbar-medias {
        display: flex;
        margin: auto var(--s32) auto auto;
        gap: var(--s8);
    }
    .navbar-media-choice {
        width: var(--s32);
        height: var(--s32);
    }
    .navbar-media-choice img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .spacer {
        width: 100%;
        height: calc(var(--navbar-height) + var(--navbar-bottom-line-height));
    }
</style>