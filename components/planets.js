import * as THREE from "https://esm.sh/three@0.160.0";

export function Earth(theta) {
    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin("anonymous");

    const texture = loader.load(
        "https://cdn.jsdelivr.net/gh/mrdoob/three.js@r160/examples/textures/planets/earth_atmos_2048.jpg"
    );
    texture.colorSpace = THREE.SRGBColorSpace;

    const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(300, 64, 64),
        new THREE.MeshStandardMaterial({ map: texture })
    );
    return mesh;
}

export function Mars() {
    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin("anonymous");

    const texture = loader.load(
        "https://cdn.jsdelivr.net/gh/jeromeetienne/threex.planets@master/images/marsmap1k.jpg"
    );
    texture.colorSpace = THREE.SRGBColorSpace;

    const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(300, 64, 64),
        new THREE.MeshStandardMaterial({ map: texture })
    );
    mesh.position.set(2000, 0, 0);
    mesh.rotation.set(1, 3, 2); 
    return mesh;
}

export function Jupiter() {
    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin("anonymous");

    const texture = loader.load(
        "https://cdn.jsdelivr.net/gh/jeromeetienne/threex.planets@master/images/jupitermap.jpg"
    );
    texture.colorSpace = THREE.SRGBColorSpace;

    const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(1000, 64, 64),
        new THREE.MeshStandardMaterial({ map: texture })
    );
    return mesh;
}