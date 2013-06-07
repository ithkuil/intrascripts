window.StateBroadcaster =
  initStateBroadcaster: ->
    @listeners = []

  setState: (state_, val) ->
    @state[state_] = val
    for listener in @listeners
      listener state_, val