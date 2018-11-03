function butterfly(group) {
	var wingMat = new THREE.MeshLambertMaterial( { color:  0xffff00 } )
	var lwingMat = new THREE.MeshLambertMaterial( { color:  0xff0000 } )
	wingGeo = new THREE.CylinderGeometry( 50, 50, 2, 50 )

	var bodyMat = new THREE.MeshLambertMaterial( { color:  0x1a0d00 } )
	bodyGeo = new THREE.CylinderGeometry( 10, 10, 130, 50 )

	var ll_wing = new THREE.Mesh( wingGeo, wingMat )
	ll_wing.position.set( -45, 100, 0 )
	ll_wing.rotation.set(0, 0, 100)
	ll_wing.scale.set( 1, 1, 1 )
	ll_wing.name = group 
	var ls_wing = new THREE.Mesh( wingGeo, wingMat )
	ls_wing.position.set( -30, 94, 50 )
	ls_wing.rotation.set(0, 0, 100)
	ls_wing.scale.set( 0.8, 0.8, 0.8 )
	ls_wing.name = group 
	var rl_wing = new THREE.Mesh( wingGeo, wingMat )
	rl_wing.position.set( 45, 100, 0 )
	rl_wing.rotation.set(0, 0, -100)
	rl_wing.scale.set( 1, 1, 1 )
	rl_wing.name = group 
	var rs_wing = new THREE.Mesh( wingGeo, wingMat )
	rs_wing.position.set( 30, 94, 50 )
	rs_wing.rotation.set(0, 0, -100)
	rs_wing.scale.set( 0.8, 0.8, 0.8 )
	rs_wing.name = group 
	var body = new THREE.Mesh( bodyGeo, bodyMat )
	body.position.set( 0, 80, 25 )
	body.rotation.set(-1.56, 0, 0)
	body.scale.set(1, 1, 1)
	body.name = group 
	
	group = new THREE.Group()
	group.add( ll_wing )
	group.add( ls_wing )
	group.add( rl_wing )
	group.add( rs_wing )
	group.add( body )
	group.position.set( 50, 0, 0 )
	group.rotation.set(0, 0, 0)
	group.position.x += 1
	group.position.y = 10
	group.scale.set(0.2, 0.2, 0.2)
	group.receiveShadow = true
	group.castShadow = true
	
	return group
}