(function(){
  window.StateBroadcaster = {
    initStateBroadcaster: function(){
      return this.listeners = [];
    },
    setState: function(state_, val){
      var i$, ref$, len$, listener, results$ = [];
      this.state[state_] = val;
      for (i$ = 0, len$ = (ref$ = this.listeners).length; i$ < len$; ++i$) {
        listener = ref$[i$];
        results$.push(listener(state_, val));
      }
      return results$;
    }
  };
}).call(this);
