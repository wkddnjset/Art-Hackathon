function init() {
	container = document.createElement( 'div' )
	document.body.appendChild( container )
    // scene
	scene = new THREE.Scene()
	scene.background = new THREE.Color( 0xcce0ff )
	scene.fog = new THREE.Fog( 0xcce0ff, 400, 10000 )
	// camera
	camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 10000 )
	camera.position.set( 1000, 1200, 1800 )

	// lights
	scene.add( new THREE.AmbientLight( 0x666666 ) )
	var light = new THREE.DirectionalLight( 0xdfebff, 1 )
	light.position.set( 250, 120, 150 )
	light.position.multiplyScalar( 1 )
	light.castShadow = true
	light.shadow.mapSize.width = 1024
	light.shadow.mapSize.height = 1024
	var d = 1000
	light.shadow.camera.left = - d
	light.shadow.camera.right = d
	light.shadow.camera.top = d
	light.shadow.camera.bottom = - d
	light.shadow.camera.far = 10000
	scene.add( light )
	// 데이터 불러오기
	// getData()
	// 대지 추가
	ground()
	// 연못 추가
	lake()
	// 나무 추가
	tree( group="tree_1", scale=0.5, x=100, z=100)
	tree(group="tree_3", scale=0.2, x=-20, z=170)
	tree(group="tree_4", scale=0.4, x=500, z=-100)
	tree(group="tree_2", scale=1, x=-100, z=-200)
	// 나비 추가
	// y : -200~0
	butterfly_1 = butterfly(group="butterfly_1", x=20, y=0, z=-100)
	scene.add( butterfly_1 )

	// 구름
	// y : 300 - 450
	cloud_1 = cloud("cloud_1", x=0, y=350, z=0)
	scene.add( cloud_1 )
	// 꽃
	flower_1 = flower("flower_1", x=150, z=50)
	scene.add( flower_1 )

	// render
	renderer = new THREE.WebGLRenderer( { antialias: true } )
	renderer.setPixelRatio( window.devicePixelRatio )
	renderer.setSize( window.innerWidth, window.innerHeight )
	container.appendChild( renderer.domElement )
	renderer.gammaInput = true
	renderer.gammaOutput = true
	renderer.shadowMap.enabled = true
	// controls
	var controls = new THREE.OrbitControls( camera, renderer.domElement )
	controls.maxPolarAngle = Math.PI * 0.6
	controls.minDistance = 1000
	controls.maxDistance = 5000

	document.addEventListener( 'mouseup', onDocumentMouseUp, false )

	window.addEventListener( 'resize', onWindowResize, false )

}
