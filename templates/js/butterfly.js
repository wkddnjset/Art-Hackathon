function butterfly(group) {
	var wingMat = new THREE.MeshLambertMaterial( { color:  0xB3FF66 } )
	wingGeo = new THREE.CylinderGeometry( 50, 50, 2, 50 )

	var ll_wing = new THREE.Mesh( wingGeo, wingMat )
	ll_wing.position.set( 0, 100, 0 )
	ll_wing.rotation.set(0, 0, 100)
	ll_wing.scale.set( 1, 1, 1 )
	ll_wing.name = group 
	var ls_wing = new THREE.Mesh( wingGeo, wingMat )
	ls_wing.position.set( 10, 94, 50 )
	ls_wing.rotation.set(0, 0, 100)
	ls_wing.scale.set( 0.8, 0.8, 0.8 )
	ls_wing.name = group 
	var rl_wing = new THREE.Mesh( wingGeo, wingMat )
	rl_wing.position.set( 90, 100, 0 )
	rl_wing.rotation.set(0, 0, -100)
	rl_wing.scale.set( 1, 1, 1 )
	rl_wing.name = group 
	var rs_wing = new THREE.Mesh( wingGeo, wingMat )
	rs_wing.position.set( 80, 94, 50 )
	rs_wing.rotation.set(0, 0, -100)
	rs_wing.scale.set( 0.8, 0.8, 0.8 )
	rs_wing.name = group 
	
	group = new THREE.Group()
	group.add( ll_wing )
	group.add( ls_wing )
	group.add( rl_wing )
	group.add( rs_wing )
	group.position.set( 0, 0, 0 )
	group.rotation.set(0, 0, 0)
	group.position.x += 1
	group.position.y = 10
	group.receiveShadow = true
	group.castShadow = true
	
	return group
}