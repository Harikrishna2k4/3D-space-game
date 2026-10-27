import * as THREE from "https://esm.sh/three@0.160.0";

export function Renderer() {
    const canvas = document.querySelector("#game");
    if (!canvas) throw new Error("canvas not found");
    const renderer = new THREE.WebGLRenderer({
        alpha: false,
        antialias: true,
        canvas: canvas,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    return renderer;
}