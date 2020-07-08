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
var geometry = new THREE.BoxGeometry(100, 100, 100)
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