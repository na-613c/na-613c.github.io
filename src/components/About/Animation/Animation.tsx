import React, {useEffect, useRef, useState} from "react";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {useFrame} from "react-three-fiber";
// @ts-ignore
import {a} from "react-spring/three";


const Animation = () => {
    let meshRef = useRef();
    const [model, setModel] = useState();

    useEffect(() => {
        // @ts-ignore
        new GLTFLoader().load('assets/scene.gltf', setModel);
    }, []);

    useFrame(() => {
        // @ts-ignore
        meshRef.current.rotation.y += 0.01;
    });

    return (
        <a.mesh
            ref={meshRef}
            scale={[1, 1, 1]}>
            {model ? // @ts-ignore
                <primitive object={model.scene}/> : null}
        </a.mesh>
    )
};

export default Animation;

