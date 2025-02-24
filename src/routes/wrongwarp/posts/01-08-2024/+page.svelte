<script lang="ts">
    import Post from "$lib/components/blog/Post.svelte";
    import Paragraph from "$lib/components/blog/Paragraph.svelte";
    import Video from "$lib/components/blog/Video.svelte";
    import PostImage from "$lib/components/blog/PostImage.svelte";
    import JoinRequestImage from "./join_request.png";
    import InputsImage from "./inputs.png";
    import WorldStateImage from "./world_state.png";
    import FastForwardImage from "./fast_forward.png";
    import RollbackImage from "./rollback.png";
</script>


<Post title="Devlog 1" date="01/08/2025">
    <Paragraph>
        Wrong Warp is an in-development PvP MMO.
        Players take control of sentient, trapped AI in an abandoned digital world, and must discover and exploit its ever-changing mechanics and landscapes to succeed.
        Rather than being one large game, it will consist of several separate small titles, each with completely unique scopes and themes but notably built using the same netcode.
        While each playable on their own, they will interconnect into one giant server network, traversible by doing 'wrong warps' through portals. The first game I plan to create will
        be a persistent multiplayer KOTH deathmatch set in a fantasy world.
    </Paragraph>
    <Paragraph>
        I first attempted to create Wrong Warp in 2022, but did not have the necessary experience in network systems nor general programming to make significant progress.
        After writing mountains of spaghetti code, I decided to call it quits.
    </Paragraph>
    <Video link="https://www.youtube.com/embed/0VFI9qGvLxg?si=3YxxEwJROK5YjqJi" title="Wrong Warp 2022"/>
    <Paragraph>
        Now, with a few more years of programming knowledge under my belt -- most importantly, having taken network systems at university and written several 
        server networks for professional applications under tight schedules -- I feel ready to create this project.
        I began development on the current iteration of this game in November 2024 using Unity and LiteNetLib for the base game with Django as the backend. Progress has been coming along steadily,
        and I plan to take a light course load over the spring 2025 semester to dedicate more time to this.
    </Paragraph>
    <Paragraph>
        So far, the feature I'm most proud of is my delta-compressed, interest-managed, rollback-based and completely server-authoritative custom netcode. I took heavy inspiration from
        <a href="https://developer.valvesoftware.com/wiki/Source_Multiplayer_Networking">Valve's Source Multiplayer Networking</a> guide and some of
        <a href="https://minecraft.fandom.com/wiki/Chunk">Minecraft's chunking techniques</a> in developing it. The game works on a "tick" schedule, where each second is divided into 20 ticks.
        Each tick, the world is simulated and the game's tick counter (stored as an integer) is incremented. When clients send a connection request, the server responds with its current tick
        so clients can synchronize their time with the server's. Almost all communication between the server and client will be based on this shared timer.
    </Paragraph>
    <PostImage title="How clients sync their ticker" image={JoinRequestImage} height={400}/>
    <Paragraph>
        As mentioned before, the server is completely authoritative in my game. This is done by having players send their inputs to the server, then simulating the results of those inputs on the server.
        To send their inputs, a client take a reading of all the buttons they have pressed, then send them to the server. As an example, imagine the server is on tick 100, and a client has synchronized
        their tick to also be 100. Then, imagine that the client tells the server that on tick 100, they pressed their "Forward" (W) key. Due to network delay, the server receives this when it has reached
        tick 102. Since tick 100 has passed, the server will ignore the client's input packet. To get around this, clients actually run a few ticks in the future (for this post, I'll use +5).
        If the client were to say they pressed their "Forward" (W) key on tick 105, the server would receive it at tick 102, then simulate those inputs on their player three ticks later.
    </Paragraph>
    <PostImage title="Clients send their inputs to the future" image={InputsImage} height={400}/>
    <Paragraph>
        Now that the server has received and simulated the client's inputs, the client needs to receive the results of those inputs. Every few ticks the server simulates, the server will bundle up all the
        changes that have happened and send them off to its connected players. If the server is on tick 106, for example, it might send all the updates that happened on tick 103, 104, 105 and 106.
        If the server is on tick 106, the client will receive the results of their inputs when they're on the future tick 106 + 2 + 5 = 113. Since ticks 103, 104, 105 and 106 would have already passed, the client
        would not be able to simulate them and have to throw them out. To get around this, clients simulate the world in the past -- more specifically, exactly as far back in time as they simulate their inputs
        forward in time. If the server and client both have a central tick of 100, the client might show the world as it was at tick 95 while simultaneously telling the server its inputs on tick 100 are actually
        from tick 105.
    </Paragraph>
    <PostImage title="Clients run old world states" image={WorldStateImage} height={400}/>
    <Paragraph>
        In this image, the client is timing their inputs dangerously close to when the server will run them, and running world state updates to run significantly later after it receives them. The client
        can know this is happening by comparing its tick against the ticks attached to received packets in combination with their ping. To fix this, the client can speed up or slow down its tick timer
        to get to a more balanced offset. This may also be useful for slowing down server's tick rate during times of high load later down the road.
    </Paragraph>
    <PostImage title="Clients balance tick offsets by fast-forwarding" image={FastForwardImage} height={400}/>
    <Paragraph>
        With this system, client inputs will now be simulated on the server and the client will now be able to simulate updates to the world received from the server. However, there will be significant delay
        in client movements using this system, waiting to receive the effects of their movement from the server. To get around this, clients predict where they'll be before receiving confirmation from the
        server. While the client and server might be running the same inputs, desync can still occur from events clients cannot predict. For example, if there were an object on the server that the client
        didn't know about, the player might get stuck walking into it on the server, but walk through it just fine on the client -- or, as more common examples, an input packet may have been dropped or a player
        collides with an entity that has moved on the server without the client knowing about it yet. To fix this, clients save their inputs over the last second, and they can resimulate the world from the
        received, confirmed world state (5 ticks in the past) and their future sending tick (5 ticks in the future) by recalculating the world state from their inputs over that time.
    </Paragraph>
    <PostImage title="Clients roll back inputs to reduce desync" image={RollbackImage} height={400}/>
    <Paragraph>
        All in all, this rollback system is great not only because it has almost no latency or desync, but because it completely removes the possibility of any non-visual cheats.
        I'll have to do more testing to see if this system needs modification, but so far it feels very smooth playing with people halfway across the US.
    </Paragraph>
    <Paragraph>
        To further reduce server load, the world is split into a 2D grid wherein players are only sent updates concerning cells, or "chunks", within a 3x3 square centered on them. Rather than send
        updates directly to players as they happen, updates are cached in the chunks they occur in, then merged together and sent to players every few ticks. Chunks that are not loaded by players
        are unloaded, and later, will be saved in the backend's database to be retrieved once a player reenters its radius.
    </Paragraph>
</Post>


<style>
    span {
        display: inline-block;
        color: var(--clr-primary);
        text-indent: var(--default-indent);
        line-height: 1.3;
    }
    .space-bottom {
        margin-bottom: var(--s8);
    }
</style>