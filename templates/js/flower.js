function flower(group) {
    var leafMat = new THREE.MeshLambertMaterial( { color:  0xff0000 } )
    var mainMat = new THREE.MeshLambertMaterial( { color:  0x331a00 } )
    var stemMat = new THREE.MeshLambertMaterial( { color:  0x006600 } )
	leafGeo = new THREE.SphereGeometry( 50, 20, 20 )

	var main = new THREE.Mesh( leafGeo, mainMat )
	main.position.set( 0, 100, 0 )
	main.rotation.set(0, 0, 100)
	main.scale.set( 0.6, 0.6, 0.6 )
	main.receiveShadow = true
	main.castShadow = true
	var left_1 = new THREE.Mesh( leafGeo, leafMat )
	left_1.position.set( -50, 100, 0 )
	left_1.rotation.set(0, 0, 100)
	left_1.scale.set( 1, 0.2, 0.5 )
	left_1.receiveShadow = true
	left_1.castShadow = true
	var left_2 = new THREE.Mesh( leafGeo, leafMat )
	left_2.position.set( -20, 100, 50 )
	left_2.rotation.set(0, 1.3, 100)
	left_2.scale.set( 1, 0.2, 0.5 )
	left_2.receiveShadow = true
	left_2.castShadow = true
	var left_3 = new THREE.Mesh( leafGeo, leafMat )
	left_3.position.set( 30, 100, 45 )
	left_3.rotation.set(0, 2.3, 100)
	left_3.scale.set( 1, 0.2, 0.5 )
	left_3.receiveShadow = true
	left_3.castShadow = true
	var left_4 = new THREE.Mesh( leafGeo, leafMat )
	left_4.position.set( 50, 100, 0 )
	left_4.rotation.set(0, 3, 100)
	left_4.scale.set( 1, 0.2, 0.5 )
	left_4.receiveShadow = true
	left_4.castShadow = true
	var left_5 = new THREE.Mesh( leafGeo, leafMat )
	left_5.position.set( 20, 100, -45 )
	left_5.rotation.set(0, 4.3, 100)
	left_5.scale.set( 1, 0.2, 0.5 )
	left_5.receiveShadow = true
	left_5.castShadow = true
	var left_6 = new THREE.Mesh( leafGeo, leafMat )
	left_6.position.set( -30, 100, -50 )
	left_6.rotation.set(0, 5.2, 100)
	left_6.scale.set( 1, 0.2, 0.5 )
	left_6.receiveShadow = true
	left_6.castShadow = true
	var stem = new THREE.Mesh( leafGeo, stemMat )
	stem.position.set( 0, 80, 100 )
	stem.rotation.set(0, 0, 100)
	stem.scale.set( 0.2, 0.2, 3 )
	stem.receiveShadow = true
	stem.castShadow = true
	var left_7 = new THREE.Mesh( leafGeo, stemMat )
	left_7.position.set( -50, 80, 150 )
	left_7.rotation.set(0, -0.8, 0)
	left_7.scale.set( 1.5, 0.5, 0.2 )
	left_7.receiveShadow = true
	left_7.castShadow = true
	var left_8 = new THREE.Mesh( leafGeo, stemMat )
	left_8.position.set( 40, 80, 150 )
	left_8.rotation.set(0, 1, 1.6)
	left_8.scale.set(  0.5, 1.5, 0.2 )
	left_8.receiveShadow = true
	left_8.castShadow = true


	group = new THREE.Group()
	group.add( main )
	group.add( left_1 )
	group.add( left_2 )
	group.add( left_3 )
	group.add( left_4 )
	group.add( left_5 )
	group.add( left_6 )
	group.add( stem )
	group.add( left_7 )
	group.add( left_8 )
	// group.add( cld2 )
 //    group.add( cld3 )
 //    group.add( cld4 )
	// group.add( cld5 )
	group.position.set( 0, 0, 0 )
	group.rotation.set(0, 0, 0)
	group.position.x += 1
	group.position.y = -180
	group.rotation.set(1.5, 0, 0)
	group.scale.set(0.25, 0.25, 0.25)
	group.receiveShadow = true
	group.castShadow = true

	return group
}
