function cloud(group, x, y, z) {
    var wingMat1 = new THREE.MeshLambertMaterial( { color:  0xA9E2F3 } )
    var wingMat2 = new THREE.MeshLambertMaterial( { color:  0xA9E2F3 } )
    var wingMat3 = new THREE.MeshLambertMaterial( { color:  0xA9E2F3 } )
    var wingMat4 = new THREE.MeshLambertMaterial( { color:  0xA9E2F3 } )
	var wingMat5 = new THREE.MeshLambertMaterial( { color:  0xA9E2F3 } )
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
	var cld3 = new THREE.Mesh( wingGeo, wingMat3 )
	cld3.position.set( 0, 300, 150 )
	cld3.rotation.set(0, 0, 100)
	cld3.scale.set( 2, 2, 2 )
	cld3.name = group
    var cld4 = new THREE.Mesh( wingGeo, wingMat4 )
	cld4.position.set( 0, 300, 230 )
	cld4.rotation.set(0, 0, 100)
	cld4.scale.set( 1.6, 1.6, 1.6 )
	cld4.name = group
    var cld5 = new THREE.Mesh( wingGeo, wingMat5 )
    cld5.position.set( 0, 300, 300 )
    cld5.rotation.set(0, 0, 100)
    cld5.scale.set( 0.8, 0.8, 0.8 )
    cld5.name = group

	group = new THREE.Group()
	group.add( cld1 )
	group.add( cld2 )
    group.add( cld3 )
    group.add( cld4 )
	group.add( cld5 )
	group.position.set( x, y, z)
	group.scale.set(0.5, 0.5, 0.5)
	group.rotation.set(0, -1, 0)
	group.receiveShadow = true
	group.castShadow = true

	scene.add( group )
}
