<script lang="ts">
    import Section from "./Section.svelte";
    import Post from "$lib/components/blog/Post.svelte";
    import HandsomeMan from "$lib/images/resume/handsome-man.jpg";

    // import Icon from "$lib/images/resume/.svg";

    import CuIcon from "$lib/images/resume/cu-boulder.png";

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
</script>


{#snippet pinSnippet(title : string, icon : string)}
    <div class="pin-container double-border unselectable">
        <img style="width: var(--s16);" src={icon} alt="title"/>
        <div class="pin-title">{title}</div>
    </div>
{/snippet}
<Post>
    <img class="handsome-man double-border" src={HandsomeMan} alt="An extremely handsome person"/>
    <div class="quote">"My nights are filled with commits, not dreams."</div>
    <Section title="About">
        <span class="section-text">     
            Full-stack developer and senior CS student, graduating May 2025.
            Experienced in web and game development. In love with networking and graphics.
        </span>
    </Section>
    <Section title="Education">
        wip
    </Section>
    <Section title="Experience">
        wip
    </Section>
    <Section title="Frameworks & Libraries">
        <div class="pins-container">
            {#each Array.from(librariesAndFrameworksPins.entries()) as [title, icon]}
                {@render pinSnippet(title, icon)}
            {/each}
        </div>
    </Section>
    <Section title="Languages">
        <div class="pins-container">
            {#each Array.from(languagesPins.entries()) as [title, icon]}
                {@render pinSnippet(title, icon)}
            {/each}
        </div>
    </Section>
    <Section title="Other Technologies">
        <div class="pins-container">
            {#each Array.from(otherTechnologiesPins.entries()) as [title, icon]}
                {@render pinSnippet(title, icon)}
            {/each}
        </div>
    </Section>
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
        margin: var(--s16) auto;
        text-align: center;
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
</style>