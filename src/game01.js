import * as THREE from "https://esm.sh/three@0.160.0";
import {Renderer} from  "../components/renderer.js";
import {Camera} from "../components/Camera.js";
import {shipGroupmovement,player, shipGroup, monster} from "../components/Player.js";
import { SkyMap } from "../components/Skymap.js";
import { Earth, Mars, Jupiter } from "../components/planets.js";

let front = false;
let back = false;
let left = false;
let right = false;
let top = false;
let down = false;

const w = document.getElementById("w");
const s = document.getElementById("s");
const a = document.getElementById("a");
const d = document.getElementById("d");
const eight = document.getElementById("8");
const two = document.getElementById("2");

w.addEventListener("pointerdown", (e) => { e.preventDefault(); front = true; });
["pointerup", "pointerleave", "pointercancel"].forEach((ev) =>
    w.addEventListener(ev, () => { front = false; })
);
s.addEventListener("pointerdown", (e) => { e.preventDefault(); back = true; });
["pointerup", "pointerleave", "pointercancel"].forEach((ev) =>
    s.addEventListener(ev, () => { back = false; })
);
a.addEventListener("pointerdown", (e) => { e.preventDefault(); left = true; });
["pointerup", "pointerleave", "pointercancel"].forEach((ev) =>
    a.addEventListener(ev, () => { left = false; })
);
d.addEventListener("pointerdown", (e) => { e.preventDefault(); right = true; });
["pointerup", "pointerleave", "pointercancel"].forEach((ev) =>
    d.addEventListener(ev, () => { right = false; })
);
eight.addEventListener("pointerdown", (e) => { e.preventDefault(); top = true; });
["pointerup", "pointerleave", "pointercancel"].forEach((ev) =>
    eight.addEventListener(ev, () => { top = false; })
);
two.addEventListener("pointerdown", (e) => { e.preventDefault(); down = true; });
["pointerup", "pointerleave", "pointercancel"].forEach((ev) =>
    two.addEventListener(ev, () => { down = false; })
);


const scene = new THREE.Scene();
scene.add(shipGroup);
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);
scene.add(monster);
const dirLight = new THREE.DirectionalLight();
dirLight.position.set(-100,-100,200);
scene.add(dirLight);

const renderer = Renderer();
const camera = Camera(renderer);
shipGroup.add(camera);

const background = SkyMap();
scene.add(background);

const earth = Earth();
scene.add(earth);
const mars = Mars();
scene.add(mars);
let theta = 0;
const jupiter = Jupiter(theta);
scene.add(jupiter)

function animate() {
    requestAnimationFrame(animate);
    camera.lookAt(shipGroup.position);
    if (front) shipGroup.translateY(2);
    if (back) shipGroup.translateY(-2);
    if (left) shipGroup.rotateZ(0.01);
    if (right) shipGroup.rotateZ(-0.01);
    if (top) shipGroup.rotateX(0.01);
    if (down) shipGroup.rotateX(-0.01);
    theta += 0.003;
    if(earth){
        earth.position.x = 3500* Math.cos(theta);
        earth.rotateY(theta*0.01);
        //earth.rotateZ(theta*0.002);
        earth.position.y = 3000* Math.sin(theta);
        earth.position.z = 0;
    }
     if(jupiter){
        jupiter.position.x = 5500* Math.cos(theta * 0.3);
        jupiter.rotateY(theta*0.005);
        //jupiter.rotateZ(theta*0.001);
        jupiter.position.y = 5500* Math.sin(theta * 0.4);
        jupiter.position.z = 2000;
    }
    if(mars){
        mars.position.x = -4200* Math.cos(theta * 0.6);
        mars.rotateY(theta*0.0014);
        //mars.rotateZ(theta*0.002);
        mars.position.y = 4000* Math.sin(theta * 0.1);
        mars.position.z = -1000;
    }
    if(theta == 7){
        theta = 0;
    }
    
    
    shipGroupmovement();
    renderer.render(scene, camera);
}
animate();