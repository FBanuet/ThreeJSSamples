import * as THREE from 'three';



let scene, camera, renderer;
let donas = [];
let ADD = 0.02;

let randomRange = (from,to) => {
    let x = Math.random() * (to - from);
    return x + from;
};

let createDount = () => {
    let geometry = new THREE.SphereGeometry(5,7,9 , 0,Math.PI , 0 , Math.PI / 2);
    let material = new THREE.MeshBasicMaterial({color: Math.random() * 0xffffff , wireframe:true});
    let d = new THREE.Mesh(geometry,material);

    d.position.x = randomRange(-20,20);
    d.position.z = randomRange(-20,20);
    d.position.y = 15;
    d.rotation.x += ADD;
    d.rotation.y -= ADD;
    scene.add(d);
    donas.push(d);
}


let init = function(){
    scene = new THREE.Scene();
    scene.background = new THREE.Color('black');

    camera = new THREE.PerspectiveCamera(80,window.innerWidth / window.innerHeight,1,1000);
    camera.position.z = 20;
    
    let axes = new THREE.AxesHelper(20);
    scene.add(axes);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    document.body.appendChild(renderer.domElement);
};

let mainLoop = function(){
    
    let x = Math.random();
    if(x < 0.1)

        createDount();
    donas.forEach(d => d.position.y -= ADD);

    renderer.render(scene,camera);
    requestAnimationFrame(mainLoop);
};


init();
mainLoop();
