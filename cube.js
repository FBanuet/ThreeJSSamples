import * as THREE from 'three';



let scene, camera, renderer , cube;
let ADD = 0.1;

let createCube = () => {
    let geometry = new THREE.BoxGeometry(1,1,1);
    let material = new THREE.MeshBasicMaterial({color:("rgb(255,0,0)")});
    cube = new THREE.Mesh(geometry,material);
    scene.add(cube);
};


let init = function(){
    scene = new THREE.Scene();
    scene.background = new THREE.Color('skyblue');

    camera = new THREE.PerspectiveCamera(80,window.innerWidth / window.innerHeight,1,1000);
    camera.position.z = 5;
    
    let axes = new THREE.AxesHelper(5);
    scene.add(axes);

    createCube();

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    document.body.appendChild(renderer.domElement);
};

let mainLoop = function(){
    
    cube.rotation.y += ADD;
    
    renderer.render(scene,camera);
    requestAnimationFrame(mainLoop);
};


init();
mainLoop();
