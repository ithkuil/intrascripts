window.Mover = ->
  initMover: ->
    @pitchObject = new THREE.Object3D()
    if @camera?
      @pitchObject.add @camera 

    @yawObject = new THREE.Object3D()
    @yawObject.position.y = 10
    @yawObject.add @pitchObject

    @velocity = new THREE.Vector3()
    @acceleration = new THREE.Vector3()

    @PI_2 = Math.PI / 2

    @enabled = false