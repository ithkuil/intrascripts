window.Walker = ~>
  initWalker: ~>
    @state =
      forward: false
      left: false
      right: false
      back: false
      isOnObject: false
      canJump: false
      jumping: false

    if @camera?
      window.document.addEventListener 'keydown', @onKeyDown, false
      window.document.addEventListener 'keyup', @onKeyUp, false

  handleKeys: (event, val) ~>  
    switch event.keyCode 
    case 38, 87 then @setState 'forward', val
    case 37, 65 then @setState 'left', val
    case 40, 83 then @setState 'back', val
    case 39, 68 then @setState 'right', val
    case 32 then @jump()

  onKeyDown: (event) ~>
    if event.keyCode is 32
      @jump!
    else
      @handleKeys event, true

  jump: ~>
    if @state.canJump
      @velocity.y += 10
      setState 'jumping', true
      setState 'canJump', false

  onKeyUp: (event) ->
    @handleKeys event, false  