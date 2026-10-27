import * as THREE from "https://esm.sh/three@0.160.0";
 export function SkyMap() {
    let Materialarray = [];
    let textureft = new THREE.TextureLoader().load('./resources/starspic.jpeg');
    let texturebk = new THREE.TextureLoader().load("./resources/starspic.jpeg");
    let texturedn = new THREE.TextureLoader().load("./resources/starspic.jpeg");
    let texturelf = new THREE.TextureLoader().load("./resources/starspic.jpeg");
    let texturert = new THREE.TextureLoader().load("./resources/starspic.jpeg");
    let textureup = new THREE.TextureLoader().load("./resources/starspic.jpeg");

    Materialarray.push(new THREE.MeshBasicMaterial({map: texturert}));
    Materialarray.push(new THREE.MeshBasicMaterial({map: texturelf}));
    Materialarray.push(new THREE.MeshBasicMaterial({map: textureup}));
    Materialarray.push(new THREE.MeshBasicMaterial({map: texturedn}));
    Materialarray.push(new THREE.MeshBasicMaterial({map: textureft}));
    Materialarray.push(new THREE.MeshBasicMaterial({map: texturebk}));
    console.log(textureft);
    for(let i=0; i<6;i++)
        Materialarray[i].side = THREE.BackSide;

    let skyboxgeometry = new THREE.BoxGeometry(10000,10000,10000);
    let skybox = new THREE.Mesh(skyboxgeometry, Materialarray);
    return skybox;
 }
 