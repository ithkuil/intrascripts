 
#based on mrdoob's pointerlockcontrols

class window.Avatar
  constructor: (@camera) ->   
    @init()

  init: =>
    @listeners = []

    @pitchObject = new THREE.Object3D()  
    if @camera?
      @pitchObject.add @camera 

    @yawObject = new THREE.Object3D()
    @yawObject.position.y = 10
    @yawObject.add @pitchObject

    @state =
      forward: false
      left: false
      right: false
      back: false
      isOnObject: false
      canJump: false
      jumping: false

    @velocity = new THREE.Vector3()

    @PI_2 = Math.PI / 2

    if @camera?
      window.document.addEventListener 'mousemove', @onMouseMove, false
      window.document.addEventListener 'keydown', @onKeyDown, false
      window.document.addEventListener 'keyup', @onKeyUp, false

    @enabled = false

  onMouseMove: (event) =>   
    if not @enabled then return

    @movementX = event.movementX or event.mozMovementX or event.webkitMovementX or 0
    @movementY = event.movementY or event.mozMovementY or event.webkitMovementY or 0

    @yawObject.rotation.y -= @movementX * 0.002
    @pitchObject.rotation.x -= @movementY * 0.002

    @pitchObject.rotation.x = Math.max - PI_2, Math.min( PI_2, @pitchObject.rotation.x )
  
  setState: (state_, val) =>
    @state[state_] = val
    for listener in @listeners
      listener state_, val

  handleKeys: (event, val) =>  
    switch event.keyCode 
    when 38, 87 then @setState 'forward', val
    when 37, 65 then @setState 'left', val
    when 40, 83 then @setState 'back', val
    when 39, 68 then @setState 'right', val
    when 32 then @jump()       

  onKeyDown: (event) =>
    if event.keyCode is 32
      @jump
    else
      @handleKeys event, true

  jump: =>
    if @state.canJump
      @velocity.y += 10
      setState 'jumping', true
      setState 'canJump', false

  onKeyUp: (event) =>
    @handleKeys event, false

  getObject: => @yawObject

  isOnObject: (boolean) =>
    @isOnObject = boolean
    @canJump = boolean

  update: (delta) =>
    if not scope.enabled then return
    delta *= 0.1

    @velocity.x += ( - @velocity.x ) * 0.08 * delta
    @velocity.z += ( - @velocity.z ) * 0.08 * delta

    @velocity.y -= 0.25 * delta

    if @state.forward then @velocity.z -= 0.12 * delta
    if @state.back then @velocity.z += 0.12 * delta    
    if @state.left then @velocity.x -= 0.12 * delta
    if @state.right then @velocity.x += 0.12 * delta

    if @state.isOnObject
      @velocity.y = Math.max 0, @velocity.y

    @yawObject.translateX @velocity.x
    @yawObject.translateY @velocity.y
    @yawObject.translateZ @velocity.z

    if @yawObject.position.y < 10
      @velocity.y = 0;
      @yawObject.position.y = 10

      @state.canJump = true
