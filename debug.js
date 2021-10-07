import * as THREE from 'three';

let scene, camera, renderer, Text;
    let ADD = 0.01, theta = 0;
    
    let createGeometry = function() {
        let loader = new THREE.FontLoader();
        let font = loader.parse(fontJSON);
        let geometry = new THREE.TextGeometry("A X M  A R Q U I T E C T O S  ||  BIM Viewer", {
            font: font, size: 10, height: 2
        });

        let material = new THREE.MeshBasicMaterial({
            color: 0x034b59
        });

        Text = new THREE.Mesh(geometry, material);
        Text.position.x = 15;
        scene.add(Text);

        
    };