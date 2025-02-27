<script lang="ts">
    import { Canvas } from '@threlte/core';
    import Scene from './Scene.svelte';
    import { onMount } from 'svelte';
    import ld from "lodash";
    
    const ENABLE_COLOR_CHANGES = true;
    const waitForSeconds = async(time : number) => await new Promise(r => setTimeout(r, time * 1000));
    const randomFloat = (x : number, y : number) => Math.random() * (y - x) + x;

    let SPEED = 256;
    let xSpeed = SPEED;
    let ySpeed = SPEED;
    let innerWidth = $state(100);
    let innerHeight = $state(100);
    let xPosition = $state(200);
    let yPosition = $state(133);
    let rotXSpeed = $state(randomFloat(-5, 5));
    let rotYSpeed = $state(randomFloat(-5, 5));
    let lastUpdateMs : number = Date.now()

    // svelte-ignore non_reactive_update
    let colors = ld.shuffle([
        "green", "lime",
        "olive", 
        "yellow", "maroon", "navy",
        "red", "blue", "purple",
        "teal", "fuchsia", "aqua"
    ]);
    let colorIndex = $state(0);

    async function moveCube() {
        const currentUpdateMs = Date.now()
        const secondsPassed = (currentUpdateMs - lastUpdateMs) / 1000;
        lastUpdateMs = currentUpdateMs;
        xPosition += secondsPassed * xSpeed;
        yPosition += secondsPassed * ySpeed;
        // Defined in layout.svelte... Can't think of an elegant way to get it so it's hardcoded here
        const navbarHeight = innerWidth >= 500 ? 105 : 80;
        const trueInnerHeight = innerHeight - navbarHeight;
        
        let colorIndexBefore = colorIndex;
        if(xPosition > innerWidth - size) {
            xPosition = innerWidth - ((xPosition + size) % innerWidth) - size;
            xSpeed = -SPEED;
            colorIndex++;
        } else if(xPosition < 0) {
            xPosition = -xPosition % innerWidth;
            xSpeed = SPEED;
            colorIndex++;
        }
        if(size < trueInnerHeight) {
            if(yPosition > trueInnerHeight - size) {
                yPosition = trueInnerHeight - ((yPosition + size) % trueInnerHeight) - size;
                ySpeed = -SPEED;
                colorIndex++;
            } else if(yPosition < 0) {
                yPosition = -yPosition % trueInnerHeight;
                ySpeed = SPEED;
                colorIndex++;
            }
        } else {
            yPosition = (trueInnerHeight - size) / 2;
        }

        if(colorIndexBefore != colorIndex) {
            rotXSpeed = randomFloat(-5, 5);
            rotYSpeed = randomFloat(-5, 5);
            if(colorIndex > colors.length) {
                let currentColor = colors[colors.length - 1];
                colors = ld.shuffle(colors);
                colorIndex = colors[0] == currentColor ? 1 : 0;
            }
        }
        
        
    }

    async function moveCubeForever() {
        for(;;) {
            await moveCube();
            await waitForSeconds(0);
        }
    }

    const { size } : { size : number } = $props();

    onMount(() => {
        moveCubeForever();
    });
</script>


<div class="bouncer" style={`left: ${xPosition}px; bottom: ${yPosition}px;`}>
    <div class="canvas-holder" style={`width: ${size}px; height: ${size}px;`}>
        <Canvas>
            <Scene color={ENABLE_COLOR_CHANGES ? colors[colorIndex % colors.length] : "white"}
            rotXSpeed={rotXSpeed} rotYSpeed={rotYSpeed}/>
        </Canvas>
    </div>
</div>
<svelte:window bind:innerWidth bind:innerHeight />


<style>
    .bouncer {
        position: fixed;
        z-index: -1;
    }
    .canvas-holder {
        position: relative;
    }
</style>