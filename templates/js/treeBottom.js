function treeBottom(mesh_name, x, z){
	stem_color=0x61210B
	var stemMaterial = new THREE.MeshLambertMaterial( { color:  0x61210B } )

    stem_geometry1 = new THREE.CylinderGeometry( 100, 100, 1, 50 )
	stem_geometry2 = new THREE.CylinderGeometry( 100, 100, 1, 50 )
	var stem1 = new THREE.Mesh( stem_geometry1, stemMaterial )
	stem1.position.set( 0, -149, 20 )
	stem1.scale.set( 1, 1, 1 )
	stem1.receiveShadow = true
	stem1.castShadow = true
	stem1.name=mesh_name
    var stem2 = new THREE.Mesh( stem_geometry2, stemMaterial )
    stem2.position.set( 0, -149, 0 )
    stem2.scale.set( 1, 1, 1 )
    stem2.receiveShadow = true
    stem2.castShadow = true
    stem2.name=mesh_name

	mesh_name = new THREE.Group()
    mesh_name.add( stem1 )
	mesh_name.add( stem2 )

	mesh_name.position.x = x
	mesh_name.position.z = z
	mesh_name.position.y = -(210-110*scale)
	mesh_name.receiveShadow = true
	mesh_name.castShadow = true
	mesh_name.scale.set(scale, scale, scale)

    scene.add( mesh_name )
}
