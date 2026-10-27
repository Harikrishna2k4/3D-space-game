import * as THREE from "https://esm.sh/three@0.160.0";
import { Renderer } from "./renderer.js";

const renderer = Renderer();
export function Camera() {
    const size = 300;
    const viewRatio = window.innerWidth / window.innerHeight;
    const width = viewRatio < 1 ? size : size * viewRatio;
    const height = viewRatio < 1 ? size/viewRatio : size;
    const camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        0.1,
        50000
    );
    camera.up.set(0,0,1);
    camera.position.set(0,-300,80);
    camera.lookAt(0,0,0);
    return camera;
}