function tree(scale, mesh_name, x, z){
	if (scale >= 1){
		leaf_color=0x488441
		stem_color=0x7D5A4F
	}
	else{
		leaf_color=0x7daf63
		stem_color=0x926044
	}
	var leaveDarkMaterial = new THREE.MeshLambertMaterial( { color: leaf_color } )
	var stemMaterial = new THREE.MeshLambertMaterial( { color: stem_color } )

	leaf_geometry = new THREE.ConeGeometry( 40, 80, 50 );
	stem_geometry = new THREE.CylinderGeometry( 30, 30, 150, 50 )
	var stem = new THREE.Mesh( stem_geometry, stemMaterial )
	stem.position.set( 0, -100, 0 )
	stem.scale.set( 1, 1, 1 )
	stem.receiveShadow = true
	stem.castShadow = true
	stem.name=mesh_name

	var leaf_1 = new THREE.Mesh( leaf_geometry, leaveDarkMaterial )
	leaf_1.position.set( 0, 50, 0 )
	leaf_1.scale.set( 2, 2, 2 )
	leaf_1.receiveShadow = true
	leaf_1.castShadow = true
	leaf_1.name=mesh_name
	var leaf_2 = new THREE.Mesh( leaf_geometry, leaveDarkMaterial )
	leaf_2.position.set( 0, 130, 0 )
	leaf_2.scale.set( 1.5, 1.5, 1.5 )
	leaf_2.receiveShadow = true
	leaf_2.castShadow = true
	leaf_2.name=mesh_name
	var leaf_3 = new THREE.Mesh( leaf_geometry, leaveDarkMaterial )
	leaf_3.position.set( 0, 200, 0 )
	leaf_3.scale.set( 1, 1, 1 )
	leaf_3.receiveShadow = true
	leaf_3.castShadow = true
	leaf_3.name=mesh_name


	mesh_name = new THREE.Group()
	mesh_name.add( stem )
	// tree.add( leaveDark );
	// tree.add( leaveLight );
	mesh_name.add( leaf_1 )
	mesh_name.add( leaf_2 )
	mesh_name.add( leaf_3 )
	// tree.add( squareLeave02 );
	// tree.add( squareLeave03 );
	mesh_name.position.x = x
	mesh_name.position.z = z
	mesh_name.position.y = -(210-110*scale)
	mesh_name.receiveShadow = true
	mesh_name.castShadow = true
	mesh_name.scale.set(scale, scale, scale)

    scene.add( mesh_name )
}
