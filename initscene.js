//three.min.js

renderer = new THREE.WebGLRenderer();
renderer.setSize( $(window).width()-50, $(window).height()-75 );
document.body.appendChild( renderer.domElement );

scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(
  35,         // Field of view
  $(window).width()-50 / $(window).height()-75,  // Aspect ratio
  .1,         // Near
  10000       // Far
);

camera.position.set( -15, 10, 15 );
camera.lookAt( scene.position );

var light = new THREE.PointLight( 0xFFFF00 );
light.position.set( 10, 0, 10 );
scene.add( light );

var geometry = new THREE.CubeGeometry( 5, 5, 5 );
var material = new THREE.MeshLambertMaterial( { color: 0xFF0000 } );
var mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

renderer.render( scene, camera ); 

