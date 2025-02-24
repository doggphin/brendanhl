<script lang="ts">
    import './reset.css';
    import './base.css';
    import { Modals } from 'svelte-modals';
    import { page } from '$app/state';
    import GithubIcon from './layout/github-icon-color.svg';
    import LinkedinIcon from './layout/linkedin-icon-color.svg';
    import YoutubeIcon from './layout/youtube-color.svg';

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
</script>

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
<div class="navbar">
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
<div class="spacer"></div>
<div class="body">
    <slot/>
</div>


<style>
    :root {
        background-color: var(--clr-background);
        --navbar-height: 105px;
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
        background: rgb(63,88,87);
        background: radial-gradient(circle, rgba(90,125,124,1) 0%, rgba(63,88,87,1) 100%);
        display: flex;
        justify-content: center;
    }
    .navbar-container {
        width: max(500px, 50%);
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
        transition-duration: var(--fast);
        color: var(--clr-primary);
        text-decoration-line: none;
        padding: var(--s8);
        border-radius: var(--s8);
    }
    .navbar-page:hover {
        transition-duration: var(--fast);
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
        width: 100vw;
        height: var(--navbar-height);
    }
</style>