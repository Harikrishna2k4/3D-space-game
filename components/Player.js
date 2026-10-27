import { GLTFLoader } from "https://esm.sh/three@0.160.0/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "https://esm.sh/three@0.160.0";

const player = Player();
const monster = Monster();
const shipGroup = new THREE.Group();
shipGroup.add(player);
export {player,shipGroup, monster};
function Player() {
    let object;
    const group = new THREE.Group();
    const loader = new GLTFLoader();
    loader.load(
        "./resources/spaceship/scene.gltf",
        function (gltf) {
            const model = gltf.scene
            object = gltf.scene;
            object.scale.set(40, 40, 40);
            object.position.set(0, 0, -70);
            object.rotation.set(Math.PI/2,0,0);
            group.add(new THREE.AxesHelper(5));
            group.add(model);
        },
        function(xhr){
            console.log((xhr.loaded / xhr.total*100) + '% loaded');
        },
        function (error) {
            console.error(error);
        }
    );
    return group;
}

function Monster() {
    let object;
    const group = new THREE.Group();
    const loader = new GLTFLoader();
    loader.load(
        "./resources/creature.glb",
        function (gltf) {
            const model = gltf.scene
            object = gltf.scene;
            object.scale.set(40, 40, 40);
            object.position.set(0, 0, -70);
            object.rotation.set(Math.PI/2,0,0);
            group.add(new THREE.AxesHelper(5));
            group.add(model);
        },
        function(xhr){
            console.log((xhr.loaded / xhr.total*100) + '% loaded');
        },
        function (error) {
            console.error(error);
        }
    );
    return group;
}

const keys = {};
window.addEventListener("keydown", (e) => {keys[e.key.toLowerCase()] = true;});
window.addEventListener("keyup", (e) => {keys[e.key.toLowerCase()] = false;});


export function shipGroupmovement() {
            if(keys["w"]){shipGroup.translateY(2);}
            if(keys["s"]){shipGroup.translateY(-1);}
            if(keys["a"]){
               shipGroup.rotateZ(0.01);
            }
            if(keys["d"]){
                shipGroup.rotateZ(-0.01);
                
            }
            if(keys["8"]){
                shipGroup.rotateX(0.01);
            }
            if(keys["2"]){
                shipGroup.rotateX(-0.01);
            }
            if(keys["4"]){
                shipGroup.rotateY(0.01);
            }
            if(keys["6"]){
                shipGroup.rotateY(-0.01);
            }
}

