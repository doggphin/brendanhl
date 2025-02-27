<script lang="ts">
    import { T, useTask } from '@threlte/core';
    import { TextureLoader } from 'three';

    const texture = $state(new TextureLoader().load('/favicon.png'));
    let rotX = $state(0);
    let rotY = $state(0);
    let rotZ = $state(0);
    useTask((delta) => {
        rotX += 1 * delta;
        rotY += 3 * delta;
        rotZ += 5 * delta;
    });
</script>

<T.Mesh rotation={[rotX, rotY, rotZ]} scale={[3.55, 3.55, 3.55]}>
    <T.BoxGeometry/>
    <T.MeshBasicMaterial map={texture}/>
</T.Mesh>