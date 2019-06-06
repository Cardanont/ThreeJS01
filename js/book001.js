var camera, scene, renderer;
var geometry, material, mesh;

scene = new THREE.Scene();

geometry = new THREE.SphereGeometry( 1, 20, 20 );
material = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true, wireframeLinewidth: 2 });
mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

renderer = new THREE.CanvasRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); 
document.body.appendChild(renderer.domElement);

camera = new THREE.PerspectiveCamera(75, window.innerWidth / window. innerHeight, 1, 1000); 
camera.position.z = 500;

renderer.render(scene, camera);