import {Canvas} from "react-three-fiber";
import * as THREE from "three";
import React, {FC} from "react";
import Animation from "./Animation";


const AnimationContainer: FC<({ width: number })> = React.memo(({width}) => {

    const isBrowser = typeof window !== "undefined";

    return isBrowser ? (
        <Canvas
            style={{width: width, height: width/2}}
            camera={{position: [0, 2, 5]}}
            onCreated={({gl}) => {
                gl.shadowMap.enabled = true;
                gl.shadowMap.type = THREE.PCFSoftShadowMap
            }}
        >
            <ambientLight intensity={0.5}/>
            <spotLight position={[15, 20, 5]} penumbra={1} castShadow/>
            <Animation/>
        </Canvas>
    ) : null;
});

export default AnimationContainer;
