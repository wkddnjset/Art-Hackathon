function lake(){
	var lakeMat = new THREE.MeshLambertMaterial( { color:  0x6666ff } )

    lakeGeo = new THREE.CylinderGeometry( 100, 100, 1, 50 )
	var lake_1 = new THREE.Mesh( lakeGeo, lakeMat )
	lake_1.position.set( 0, -223, 20 )
	lake_1.scale.set( 1, 1, 1 )

	var lake_2 = new THREE.Mesh( lakeGeo, lakeMat )
	lake_2.position.set( 100, -223, 20 )
	lake_2.scale.set( 0.8, 0.8, 0.8 )

	var lake_3 = new THREE.Mesh( lakeGeo, lakeMat )
	lake_3.position.set( -80, -223, 140 )
	lake_3.scale.set( 0.6, 0.5, 0.6 )


	lakeG = new THREE.Group()
    lakeG.add( lake_1 )
    lakeG.add( lake_2 )
    lakeG.add( lake_3 )

	lakeG.position.set(0,0,0)
	// group.position.y = -(210-110*scale)
	lakeG.receiveShadow = true
	lakeG.castShadow = true

    scene.add( lakeG )
}
