import * as THREE from 'three';
let scene, camera, renderer,particles;

let ADD = 0.02;

let RandomInRange = (from,to) =>{
    let x = Math.random() * (to-from);
    return x + from;
}


let createGeometry = () => {
    //let material = new THREE.LineDashedMaterial({color: 0xffffff, linewidth: 1, dashSize: 3, gapSize: 1});

    let material = new THREE.PointsMaterial({color: 0xffffff,size:0.5});

    let geometry = new THREE.BufferGeometry();

    let listaVertices = [];
    
    for(let i = 1; i <= 100; i++)
    {
        let x = RandomInRange(-20,20);
        listaVertices.push(x);
        let y = RandomInRange(-20,20);
        listaVertices.push(y);
        let z  = RandomInRange(-20,20);
        listaVertices.push(z);
    }
    geometry.setFromPoints(listaVertices);
    geometry.computeBoundingSphere();
    particles = new THREE.Points(geometry,material);

    scene.add(particles);
    

    
}