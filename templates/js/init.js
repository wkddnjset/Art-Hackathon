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
	getData()
	// 대지 추가
	ground()
	// 나무 추가
	tree(scale=0.5, mesh_name="tree_1", x=100, z=100)
	tree(scale=0.2, mesh_name="tree_3", x=-20, z=170)
	tree(scale=0.4, mesh_name="tree_4", x=500, z=-100)
	tree(scale=1, mesh_name="tree_2", x=-100, z=-200)
	// 나비 추가
	butterfly_1 = butterfly("butterfly_1")
	scene.add( butterfly_1 )
	// 구름
	cloud_1 = cloud("cloud_1")
	scene.add( cloud_1 )
	//나무 밑둥
	treeBottom(mesh_name="treeBottom_1", x=200, z=0)

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

	document.addEventListener( 'mousedown', onDocumentMouseDown, false )

	window.addEventListener( 'resize', onWindowResize, false )

}
