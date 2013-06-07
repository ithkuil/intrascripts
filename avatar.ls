 #based on mrdoob's pointerlockcontrols

{ Looker, Mover } = window

class window.Avatar implements Mover, Looker, Walker, StateBroadcaster
  constructor: (@camera) ~>   
    @init()

  isOnObject: (bool) ~>
    @isOnObject = bool
    @canJump = bool


  init: ~>
    @listeners = []

    @initLooker!
    @initMover!
    @initWalker!
    @initStateBroadcaster!

  getObject: ~>
    return @yawObject


  update: (delta) ~>
    if not @enabled then return
   
    #set the @acceleration
    #then call walker update
    #then call mover move

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
