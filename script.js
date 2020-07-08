var renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('myCanvas'),
  antialias: true
})

renderer.setClearColor(0xcafebabe)
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)

// camera
var camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  0.1,
  3000
  )
camera.position.set(0, 0, 0)

// scene
var scene = new THREE.Scene()

var light = new THREE.AmbientLight(0xffffff, 0.7)
scene.add(light)

var light1 = new THREE.PointLight(0xffffff, 0.5)
scene.add(light1) 

//mesh
/* var geometry = new THREE.Geometry()
geometry.vertices.push(
  new THREE.Vector3(-50, 50, 0),
  new THREE.Vector3(-50, -50, 0),
  new THREE.Vector3(50, -50, 0)
)
geometry.faces.push(new THREE.Face3(0, 1, 2)) */

/*
var geometry = new THREE.BufferGeometry()
var vertices = new Float32Array([
  -50.0, 50.0, 50.0,
  50.0, -50.0, 50.0,
  50.0, 50.0, -50.0
])
geometry.addAttribute('position', new THREE.BufferAttribute(vertices, 3))
*/

// var geometry = new THREE.PlaneGeometry(100, 100)
// var geometry = new THREE.SphereGeometry(100, 10, 10)
// var geometry = new THREE.TorusKnotBufferGeometry(100, 100, 100, 100)

/*
var geometry = new THREE.TorusKnotBufferGeometry(100, 100, 100, 100)
var wireframe = new THREE.WireframeGeometry( geometry )
var line = new THREE.LineSegments( wireframe )
line.material.depthTest = false;
line.material.opacity = 0.75;
line.material.transparent = true;
scene.add( line ); */

/* function CustomSinCurve( scale ) {
	THREE.Curve.call( this );
	this.scale = ( scale === undefined ) ? 1 : scale;
}
CustomSinCurve.prototype = Object.create( THREE.Curve.prototype );
CustomSinCurve.prototype.constructor = CustomSinCurve;
CustomSinCurve.prototype.getPoint = function ( t ) {
	var tx = t * 3 - 1.5;
	var ty = Math.sin( 2 * Math.PI * t );
	var tz = 0;
	return new THREE.Vector3( tx, ty, tz ).multiplyScalar( this.scale );
};
var path = new CustomSinCurve( 100 );
var geometry = new THREE.TubeBufferGeometry( path, 20, 20, 8, false );
*/

var x = 0, y = 0;
var heartShape = new THREE.Shape();
heartShape.moveTo( x + 5, y + 5 );
heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );
var geometry = new THREE.ShapeBufferGeometry( heartShape );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var mesh = new THREE.Mesh( geometry, material ) ;
scene.add( mesh );

var material = new THREE.MeshLambertMaterial({color: 0xabcdef})
var mesh = new THREE.Mesh(geometry, material)
mesh.position.set(0, 0, -1000)

scene.add(mesh)

requestAnimationFrame(render)

function render() {
  mesh.rotation.x += 0.01
  mesh.rotation.y += 0.01
  renderer.render(scene, camera) 
  requestAnimationFrame(render)
}

// document.body.appendChild(renderer.domElement)