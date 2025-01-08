<script lang="ts">
    import './reset.css';
    import './vars.css';
    import { page } from '$app/state';
    import GithubIcon from './layout/github-icon-color.svg';
    import LinkedinIcon from './layout/linkedin-icon-color.svg';
    import YoutubeIcon from './layout/youtube-color.svg';

    interface NavbarTab {
        name: string;
        link: string;
    };
    const navbarTabs : NavbarTab[] = [
        { name: "Projects", link: `/projects` },
        { name: "About", link:`/about` },
        { name: "Contact", link:`/contact` },
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


<div class="navbar">
    <div class="brand">
        <span>Brendan H. Lancaster</span>
    </div>
    <nav class="navbar-items-container">
        <ul class="navbar-pages">
            {#each navbarTabs as navbarTab}
                {@const isSelected : Boolean = navbarTab.link == page.url.pathname}
                <li>
                    <a class="navbar-page {isSelected ? "navbar-page-selected" : ""}" href={navbarTab.link}>
                        <span>{navbarTab.name}</span>
                    </a>     
                </li>
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
<div class="body">
    <slot/>
</div>


<style>
    :root {
        background-color: var(--clr-background);
    }

    .navbar {
        position: fixed;
        inset: 0 0 auto 0;
        background-color: var(--clr-secondary);
    }
    .brand {
        color: var(--clr-primary);
        margin: var(--small) 0 0 var(--medium);
        font-size: var(--medium-text);
    }

    .navbar-items-container {
        display: flex;
        justify-content: space-between;
        height: var(--large);
    }

    .navbar-pages {
        display: flex;
        gap: var(--tiny);
        margin: auto auto auto calc(var(--medium) - var(--tiny));
    }
    .navbar-page {
        color: var(--clr-primary);
        text-decoration-line: none;
        padding: var(--tiny);
        border-radius: var(--tiny);
    }
    .navbar-page:hover {
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
        margin: auto var(--medium) auto auto;
        gap: var(--tiny);
    }
    .navbar-media-choice {
        width: var(--medium);
        height: var(--medium);
    }
    .navbar-media-choice img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>