<script lang="ts">
    import { onMount } from "svelte";
    import Section from "./Section.svelte";
    import NewTabLink from "./NewTabLink.svelte";
    import TimeWithBrand from "./TimeWithBrand.svelte";
    import Post from "$lib/components/blog/Post.svelte";
    import HandsomeMan from "$lib/images/resume/handsome-man.jpg";

    // import Icon from "$lib/images/resume/.svg";

    import CSharpIcon from "$lib/images/resume/csharp.svg";
    import PythonIcon from "$lib/images/resume/python.svg";
    import JavaIcon from "$lib/images/resume/java.svg";
    import KotlinIcon from "$lib/images/resume/kotlin.svg";
    import CPPIcon from "$lib/images/resume/cpp.svg";
    import CIcon from "$lib/images/resume/c.svg";
    import TypeScriptIcon from "$lib/images/resume/typescript.svg";
    import JavaScriptIcon from "$lib/images/resume/javascript.svg";
    import HTMLIcon from "$lib/images/resume/html.svg";
    import CSSIcon from "$lib/images/resume/css.svg";

    import DjangoIcon from "$lib/images/resume/django.svg";
    import DotNetCoreIcon from "$lib/images/resume/dotnetcore.svg";
    import SvelteIcon from "$lib/images/resume/svelte.svg";
    import FlaskIcon from "$lib/images/resume/flask.svg";
    import ReactIcon from "$lib/images/resume/react.svg";
    import UnityIcon from "$lib/images/resume/unity.svg";
    import OpenGLIcon from "$lib/images/resume/opengl.svg";
    import OpenCVIcon from "$lib/images/resume/opencv.svg";

    import PostgresIcon from "$lib/images/resume/postgres.svg";
    import GitIcon from "$lib/images/resume/git.svg";
    import PhotoshopIcon from "$lib/images/resume/photoshop.svg";
    import PremiereIcon from "$lib/images/resume/premiere.png";
    import AuditionIcon from "$lib/images/resume/audition.png";
    import BlenderIcon from "$lib/images/resume/blender.svg";
    
    import CUIcon from "$lib/images/resume/cu-full.png";
    import MemoryWiseIcon from "$lib/images/resume/memorywise-full.png";

    const createPinsMap = (entries : [string, string][]) => new Map<string, string>(entries);

    const languagesPins = createPinsMap([
        ["Python", PythonIcon],
        ["C#", CSharpIcon],
        ["Java", JavaIcon],
        ["Kotlin", KotlinIcon],
        ["C++", CPPIcon],
        ["C", CIcon],
        ["TS", TypeScriptIcon],
        ["JS", JavaScriptIcon],
        ["HTML", HTMLIcon],
        ["CSS", CSSIcon],
        ["SQL (PSQL)", PostgresIcon],
    ]);

    const librariesAndFrameworksPins = new Map<string, string>([
        ["Django", DjangoIcon],
        ["Svelte", SvelteIcon],
        ["Unity", UnityIcon],
        [".NET", DotNetCoreIcon],
        ["Flask", FlaskIcon],
        ["React", ReactIcon],
        ["OpenGL", OpenGLIcon],
        ["OpenCV", OpenCVIcon]
    ]);

    const otherTechnologiesPins = new Map<string, string>([
        ["Git", GitIcon],
        ["Photoshop", PhotoshopIcon],
        ["Premiere", PremiereIcon],
        ["Audition", AuditionIcon],
        ["Blender", BlenderIcon]
    ]);

    let { data } = $props();
</script>


{#snippet pinSnippet(title : string, icon : string)}
    <div class="pin-container double-border unselectable">
        <img style="width: var(--s16);" src={icon} alt="title"/>
        <div class="pin-title">{title}</div>
    </div>
{/snippet}
<Post>
    <img class="handsome-man double-border" src={HandsomeMan} alt="An extremely handsome person"/>
    <div class="quote">"my nights are filled with commits, not dreams"</div>
    <div class="attributed-to">-insomniac with crippling programming addiction </div>
    <ol class="sections-container">
        <div class="section-wrapper">
            <Section title="About">
                <span class="section-text">     
                    Full-stack developer and senior CS student, graduating May 2025.
                    Experienced in web and game development and in love with networking and graphics.
                </span>
            </Section>
        </div>
        <div class="section-wrapper">
            <Section title="Education">
                <ol class="time-with-brand-container">
                    <TimeWithBrand company="CU Boulder" position="Bachelor of Science in Computer Science - 3.4 GPA" icon={CUIcon} time="Graduating May 2025">
                        <span class="subtext">
                            Notable classes include: Network Systems, Advanced Computer Graphics, Object-Oriented Programming, Operating Systems,
                            Software Dev Methods & Tools, Database Systems, Robotics, Machine Learning, NLP, Computer Architecture, Algorithms
                        </span>
                    </TimeWithBrand>
                </ol>
            </Section>
        </div>
        <div class="section-wrapper">
            <Section title="Experience">
                <ol class="time-with-brand-container">
                    <TimeWithBrand company="MemoryWise" position="Full-Stack Developer" icon={MemoryWiseIcon} time="May 2024 - Current" link="https://memorywise.com/">
                        <span class="subtext">
                            - Developing a server network and webapp to move away from google sheets for project management
                            using Django and Svelte, hosted on AWS EC2 + RDS (PostgreSQL) instances and across local servers
                        </span>
                        <span class="subtext">
                            - Automating correction of scanned media for audio, image and video files, enforcement of file
                            and project structure guidelines, and other time-consuming tasks
                        </span>
                        <span class="subtext">
                            - Heavy use of websockets to allow employees to collaborate on projects in real-time
                        </span>
                        <span class="subtext">
                            - Showcases my initiative, full-cycle development skills by having transformed what started as a
                            personal project into employment and finally a commercially used product
                        </span>
                    </TimeWithBrand>
                    <TimeWithBrand company="MemoryWise" position="Digitizing Assistant" icon={MemoryWiseIcon} time="May 2023 - May 2024" link="https://memorywise.com/">
                        <span class="subtext">
                            - Converted dated media from analogue to digital formats and restored them with Adobe Photoshop, Adobe Premiere,
                            Adobe Audition and Audacity
                        </span>
                        <span class="subtext">
                            - Used Excel to input and track clients, invoices and project progress
                        </span>
                    </TimeWithBrand>
                </ol>
            </Section>
        </div>
        <div class="section-wrapper"></div>
        <Section title="Frameworks & Libraries">
            <div class="pins-container">
                {#each Array.from(librariesAndFrameworksPins.entries()) as [title, icon]}
                    {@render pinSnippet(title, icon)}
                {/each}
            </div>
        </Section>
        <div class="section-wrapper">
            <Section title="Languages">
                <div class="pins-container">
                    {#each Array.from(languagesPins.entries()) as [title, icon]}
                        {@render pinSnippet(title, icon)}
                    {/each}
                </div>
            </Section>
        </div>
        <div class="section-wrapper">
            <Section title="Other Technologies">
                <div class="pins-container">
                    {#each Array.from(otherTechnologiesPins.entries()) as [title, icon]}
                        {@render pinSnippet(title, icon)}
                    {/each}
                </div>
            </Section>
        </div>
        <div class="section-wrapper">
            <Section title="Projects (wip)">
                <ol class="projects-list">
                    <li>
                        this (2025) <NewTabLink link="https://github.com/doggphin/brendanhl" altText="This website's repo"/>
                    </li>
                    <li>
                        geoengine (2024) <NewTabLink link="https://github.com/doggphin/geoengine" altText="Repo for GeoEngine"/>
                    </li>
                    <li>
                        miniware (2025) <NewTabLink link="https://github.com/doggphin/miniware" altText="Repo for Miniware"/>
                    </li>
                    <li>
                        x86 checkers (2022) <NewTabLink link="https://github.com/doggphin/x86-checkers" altText="Repo for x86 checkers"/>
                    </li>
                </ol>
            </Section>
        </div>
        <div class="section-wrapper">
            <Section title="Total LeetCode Endured">
                {#if data}
                    <ol class="projects-list">
                        <li>
                            {data.completedStats[0].count} / {data.totalStats[0].count} questions completed <NewTabLink link="https://leetcode.com/u/brla5166/" altText="Hell"/>
                        </li>
                        {#each data.completedStats.slice(1, 4) as stat}
                            {@const total = data.totalStats.find((s: { difficulty: string; }) => s.difficulty === stat.difficulty).count}
                            {@const color = stat.difficulty === "All" ? "var(--clr-primary)" : stat.difficulty === "Easy" ? "green" : stat.difficulty === "Medium" ? "yellow" : "red"}
                            <li>
                                {Math.ceil((stat.count / total) * 100)}% of all <span style={`color : ${color};`}>{stat.difficulty.toLowerCase()}</span> questions completed
                            </li>
                        {/each}
                    </ol>
                {/if}
            </Section>
        </div>
    </ol>
</Post>


<style>
    .handsome-man {
        display: block;
        width: 50%;
        border-radius: 50%;
        border-color: var(--clr-secondary-darker);
        margin: 0 auto;
        
    }
    .quote {
        margin: var(--s32) auto 0 auto;
        font-size: var(--s24);
        text-align: center;
    }
    .attributed-to {
        margin: var(--s8) auto var(--s32) auto;
        font-size: var(--s12);
        width: fit-content;
    }
    .section-text {
        display: block;
        text-indent: var(--default-indent);
    }

    .pins-container {
        display: flex;
        gap: var(--s4);
        flex-wrap: wrap;
    }
    .pin-container {
        display: inline-flex;
        background-color: var(--clr-primary);
        gap: var(--s8);
        padding: var(--s4);
        border-radius: var(--s4);
        color: var(--clr-secondary-darker);
    }
    .pin-title {
        display: flex;
        font-size: 15px;
        justify-content: center;
        align-items: center;
    }

    .subtext {
        display: block;
        font-size: var(--s12);
    }

    .sections-container >:not(:last-child) {
        margin-bottom: var(--s32);
    }
    .time-with-brand-container >:not(:last-child) {
        margin-bottom: var(--s4); /* Adjust as needed */
    }

    .projects-list >:not(:last-child) {
        margin-bottom: var(--s8);
    }
</style>