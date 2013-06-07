window.Looker ~>

  initLooker: ~>
    if @camera?
      window.document.addEventListener 'mousemove', @onMouseMove, false

  onMouseMove: (event) ->   
    if not @enabled then return

    @movementX = event.movementX or event.mozMovementX or event.webkitMovementX or 0
    @movementY = event.movementY or event.mozMovementY or event.webkitMovementY or 0

    @yawObject.rotation.y -= @movementX * 0.002
    @pitchObject.rotation.x -= @movementY * 0.002

    @pitchObject.rotation.x = Math.max(- @PI_2, Math.min( @PI_2, @pitchObject.rotation.x ))