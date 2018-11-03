function flower(group) {
    var leafMat = new THREE.MeshLambertMaterial( { color:  0xA9E2F3 } )
    var mainMat = new THREE.MeshLambertMaterial( { color:  0xA9E2F3 } )
    var stemMat = new THREE.MeshLambertMaterial( { color:  0xA9E2F3 } )
	wingGeo = new THREE.SphereGeometry( 50, 20, 20 )

	var cld1 = new THREE.Mesh( wingGeo, wingMat1 )
	cld1.position.set( 0, 300, 0 )
	cld1.rotation.set(0, 0, 100)
	cld1.scale.set( 0.8, 0.8, 0.8 )
	cld1.name = group
	var cld2 = new THREE.Mesh( wingGeo, wingMat2 )
	cld2.position.set( 0, 300, 80 )
	cld2.rotation.set(0, 0, 100)
	cld2.scale.set( 1.6, 1.6, 1.6 )
	cld2.name = group

	group = new THREE.Group()
	group.add( cld1 )
	group.add( cld2 )
    group.add( cld3 )
    group.add( cld4 )
	group.add( cld5 )
	group.position.set( 0, 0, 0 )
	group.rotation.set(0, 0, 0)
	group.position.x += 1
	group.position.y = 10
	group.receiveShadow = true
	group.castShadow = true

	return group
}
