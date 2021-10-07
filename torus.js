import * as THREE from 'three';



let scene, camera, renderer , torus;
let ADD = 0.05;

let createTorus = () => {
    let geometry = new THREE.TorusGeometry(7,1,30,30);
    let material = new THREE.MeshBasicMaterial({color:("rgb(255,0,132)"),wireframe:true});
    torus = new THREE.Mesh(geometry,material);
    scene.add(torus);
};


let init = function(){
    scene = new THREE.Scene();
    scene.background = new THREE.Color('black');

    camera = new THREE.PerspectiveCamera(80,window.innerWidth / window.innerHeight,1,1000);
    camera.position.z = 20;
    
    let axes = new THREE.AxesHelper(20);
    scene.add(axes);

    createTorus();

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    document.body.appendChild(renderer.domElement);
};

let mainLoop = function(){
    
    torus.rotation.x += ADD;
    torus.rotation.y += ADD;
    renderer.render(scene,camera);
    requestAnimationFrame(mainLoop);
};


init();
mainLoop();
