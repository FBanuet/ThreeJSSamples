import * as THREE from 'three';



let scene, camera, renderer , sphere;
let ADD = 0.05;

let createSphere = () => {
    let geometry = new THREE.SphereGeometry(5,7,9 , 0,Math.PI , 0 , Math.PI / 2);
    let material = new THREE.MeshBasicMaterial({color:("rgb(255,0,132)"),wireframe:true});
    sphere = new THREE.Mesh(geometry,material);
    scene.add(sphere);
};


let init = function(){
    scene = new THREE.Scene();
    scene.background = new THREE.Color('black');

    camera = new THREE.PerspectiveCamera(80,window.innerWidth / window.innerHeight,1,1000);
    camera.position.z = 20;
    
    let axes = new THREE.AxesHelper(20);
    scene.add(axes);

    createSphere();

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    document.body.appendChild(renderer.domElement);
};

let mainLoop = function(){
    
    sphere.rotation.x += ADD;
    sphere.rotation.y += ADD;
    renderer.render(scene,camera);
    requestAnimationFrame(mainLoop);
};


init();
mainLoop();
