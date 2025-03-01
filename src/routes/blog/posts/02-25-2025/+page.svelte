<script lang="ts">
    import Post from "$lib/components/blog/Post.svelte";
    import PostParagraph from "$lib/components/blog/PostParagraph.svelte";
    import PostVideo from "$lib/components/blog/PostVideo.svelte";
</script>


<Post title="Devlog 2" date="02/25/2025">
    <PostParagraph>
Since the last post, I spent a good chunk of my time cleaning up
my code, and it's made it significantly easier to add new features.
So far, I've fixed entity spawning and deaths, added inventory, audio
and item systems, added a chat system, added several UI layers, and
have started work on the game's backend (for saving and loading inventories
and saving a server list).
    </PostParagraph>
    <PostParagraph>
First off, I decided to completely rewrite almost all of the chunks code.
While it worked alright before, it's significantly more efficient
and easier to work with, and it fixed a shitton of bugs I didn't
realize even existed. Spawning and despawning entities for clients
consistently works now.
    </PostParagraph>
    <PostParagraph>
I also added interactable entities. When players look at an interactable
entity, a menu shows up showing what they can do with it, and they can press
"E" to interact with it. Right now, I've only added item pickups which I'm
using to test the inventory system, but this system can be used for pretty
much anything.
    </PostParagraph>
    <PostParagraph>
The inventory system I've made allows for multiple inventories to
be open at the same time, and for each inventory to have its own UI, allow
different types of items in different slots, and have its own item movement
sounds. One cool, but really stupid, thing I added was making the player's
armor slots move around with their player as it spins in their inventory page.
Items also have their own respective sound categories assigned to them that
play when they get moved around or picked up.
    </PostParagraph>
    <PostVideo title="Interactables, Items, Inventories, Sounds" link="/media/blog/02-25-2025/demo.mp4"/>
    <PostParagraph>
The chat system works by sending chat messages to all players within range of
the sender. This plays a text-to-speechified clip of whatever they said using
Microsoft's SAM (Software Automatic Mouth). It's buggy as balls and sounds terrible. I'm intentionally
omitting player names, and plan to replace the placeholder wizard face with a
picture taken of the player model's head. I've also added admin commands to teleport around
and spawn entities in and stuff.
    </PostParagraph>
    <PostVideo title="Local Text-To-Speech Chat" link="/media/blog/02-25-2025/tts.mp4"/>
    <PostParagraph>
With this stuff out of the way, I think I'm gonna focus on the game loop next.
I'll be adding a health system, equipping weapons,
shooting bullets, health systems and rolling back players to line up their shots
on the server next.
    </PostParagraph>
</Post>