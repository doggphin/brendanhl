<script lang="ts">
    import { T, useTask } from '@threlte/core';
    import { TextureLoader } from 'three';

    const texture = $state(new TextureLoader().load('/favicon.png'));
    let rotX = $state(0);
    let rotY = $state(0);
    useTask((delta) => {
        rotX += rotXSpeed * delta;
        rotY += rotYSpeed * delta;
    });

    const { color, rotXSpeed, rotYSpeed } : 
    { color : string, rotXSpeed : number, rotYSpeed : number } = $props();
</script>

<T.Mesh rotation={[rotX, rotY, 0]} scale={[3.55, 3.55, 3.55]}>
    <T.BoxGeometry/>
    <T.MeshBasicMaterial map={texture} color={color}/>
</T.Mesh>