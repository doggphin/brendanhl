<script lang="ts">
    import { Canvas } from '@threlte/core';
    import Scene from './Scene.svelte';
    import { onMount } from 'svelte';

    const waitForSeconds = async(time : number) => await new Promise(r => setTimeout(r, time * 1000));

    let SPEED = 256;
    let xSpeed = SPEED;
    let ySpeed = SPEED;
    let innerWidth = $state(100);
    let innerHeight = $state(100);
    let xPosition = $state(200);
    let yPosition = $state(133);
    let lastUpdateMs : number = Date.now()

    async function moveCube() {
        const currentUpdateMs = Date.now()
        const msPassed = currentUpdateMs - lastUpdateMs;
        xPosition += (msPassed / 1000) * xSpeed;
        yPosition += (msPassed / 1000) * ySpeed;
        lastUpdateMs = currentUpdateMs;
        if(xPosition > innerWidth - size) {
            xPosition = innerWidth - ((xPosition + size) % innerWidth) - size;
            xSpeed = -SPEED;
        } else if(xPosition < 0) {
            xPosition = -xPosition % innerWidth;
            xSpeed = SPEED;
        }
        if(yPosition > innerHeight - size) {
            yPosition = innerHeight - ((yPosition + size) % innerHeight) - size;
            ySpeed = -SPEED;
        } else if(yPosition < 0) {
            yPosition = -yPosition % innerHeight;
            ySpeed = SPEED;
        }
    }

    async function moveCubeForever() {
        for(;;) {
            await moveCube();
            await waitForSeconds(0.01);
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
            <Scene/>
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