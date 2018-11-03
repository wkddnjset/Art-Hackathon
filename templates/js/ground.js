function ground(){
	var grassMaterial = new THREE.MeshLambertMaterial( { color:  0xB3FF66 } )
	var landMaterial = new THREE.MeshLambertMaterial( { color: 0x7D5A4F } )
	var sm_Material = new THREE.MeshLambertMaterial( { color: 0xaa7744 } )

	geometry = new THREE.CylinderGeometry( 800, 800, 5, 50 )
	sm_geometry = new THREE.CylinderGeometry( 20, 20, 5, 50 )
	var grass = new THREE.Mesh( geometry, grassMaterial )
	grass.position.set( 0, -150, 0 )
	grass.scale.set( 1, 10, 1 )
	grass.receiveShadow = true
	grass.castShadow = true
	var land = new THREE.Mesh( geometry, landMaterial )
	land.position.set( 0, -200, 0 )
	land.scale.set( 1, 10, 1 )
	var small_1 = new THREE.Mesh( sm_geometry, sm_Material )
	small_1.position.set( 300, -126, 500 )
	small_1.scale.set( 1, 1, 1 )
	var small_2 = new THREE.Mesh( sm_geometry, sm_Material )
	small_2.position.set( 0, -126, 300 )
	small_2.scale.set( 1, 1, 1 )
	var small_3 = new THREE.Mesh( sm_geometry, sm_Material )
	small_3.position.set( -300, -126, -250 )
	small_3.scale.set( 1, 1, 1 )
	var small_4 = new THREE.Mesh( sm_geometry, sm_Material )
	small_4.position.set( 600, -126, -50 )
	small_4.scale.set( 1, 1, 1 )

	ground = new THREE.Group();
	ground.add( grass );
	ground.add( land );
	ground.add( small_1 );
	ground.add( small_2 );
	ground.add( small_3 );
	ground.add( small_4 );

	ground.position.x = 0
	ground.position.y = -100
	ground.receiveShadow = true
	ground.castShadow = true
    scene.add( ground )
}