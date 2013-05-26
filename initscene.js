//three.min.js

renderer = new THREE.WebGLRenderer();
renderer.setSize( $(window).width()-50, $(window).height()-75 );
document.body.appendChild( renderer.domElement );

scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(
  35,         // Field of view
  ($(window).width()-50) / ($(window).height()-75),  // Aspect ratio
  .1,         // Near
  10000       // Far
);

camera.position.set( -15, 10, 15 );
camera.lookAt( scene.position );

var light = new THREE.PointLight( 0xFFFF00 );
light.position.set( 10, 0, 10 );
scene.add( light );

renderer.render( scene, camera ); 

