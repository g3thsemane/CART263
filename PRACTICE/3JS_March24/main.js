import * as THREE from 'three';

const scene = new THREE.Scene();

// Geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Material
const material = new THREE.MeshBasicMaterial({ color: 0x008080 });

// Put together
const mesh = new THREE.Mesh(geometry, material);

// Add to the scene
scene.add(mesh);

const mesh_2 = new THREE.Mesh(geometry, material)
scene.add(mesh_2)
mesh_2.position.x = 1.5
mesh_2.position.y = 1.25
mesh_2.position.z = -1

const sizes = {

    width: 800,
    height: 900
}
//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
scene.add(camera)

camera.position.z = 3 

//Access the canvas
const canvas = document.querySelector('canvas#three-ex')

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)


//TURN ON AXES HELPER
//https://threejs.org/docs/?q=Axes#AxesHelper
const axesHelper = new THREE.AxesHelper(1)
scene.add(axesHelper)
//move it 
axesHelper.position.x = -1;
axesHelper.position.y = -1;
