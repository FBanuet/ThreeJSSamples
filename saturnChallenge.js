import * as THREE from 'three';
import { Camera } from 'three';



let scene, camera, renderer;
let planet;
let rings = [];
let ADD = 0.01;

let createSaturn = function() {
    let geometry = new THREE.SphereGeometry(4, 30, 30);
    let material = new THREE.MeshBasicMaterial({color: 0x8d5524});
    
    planet = new THREE.Mesh( geometry, material );
    scene.add(planet);
    
    geometry = new THREE.TorusGeometry(5.1, 0.7, 2, 50);
    material = new THREE.MeshBasicMaterial({color: 0xffe39f});
    let ring = new THREE.Mesh(geometry, material);
    rings.push(ring);
   
    
    geometry = new THREE.TorusGeometry(6.9, 0.7, 2, 50);
    material = new THREE.MeshBasicMaterial({color: 0xffad60});
    ring = new THREE.Mesh(geometry, material);
    rings.push(ring);
    
    
    geometry = new THREE.TorusGeometry(8.5, 0.7, 2, 50);
    material = new THREE.MeshBasicMaterial({color: 0xeac086});
    ring = new THREE.Mesh(geometry, material);
    rings.push(ring);
    
     
    rings.forEach(ring => {
        ring.rotation.x = 1.7;
        ring.rotation.y = 0.5;
        scene.add(ring);
    });
    
};


// set up the environment - 
// initiallize scene, camera, objects and renderer
let init = function() {
    // create the scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    
    // create an locate the camera
    camera = new THREE.PerspectiveCamera(75, 
                    window.innerWidth / window.innerHeight, 
                    1, 1000);
    camera.position.z = 20;
    
    
    createSaturn();
    
    axes = new THREE.AxesHelper(10);
    scene.add(axes);
    
    // create the renderer   
    renderer = new THREE.WebGLRenderer();   
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    document.body.appendChild(renderer.domElement);
    
};


// main animation loop - calls 50-60 times per second.
let mainLoop = function() {
    camera.position.y += ADD;
    if(camera.position.y >= 5 || camera.position.y <= -5)
        ADD *= -1;
    renderer.render(scene, camera);
    requestAnimationFrame(mainLoop);
};

///////////////////////////////////////////////
init();
mainLoop();