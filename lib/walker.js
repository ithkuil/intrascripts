(function(){
  var this$ = this;
  window.Walker = function(){
    return {
      initWalker: function(){
        this$.state = {
          forward: false,
          left: false,
          right: false,
          back: false,
          isOnObject: false,
          canJump: false,
          jumping: false
        };
        if (this$.camera != null) {
          window.document.addEventListener('keydown', this$.onKeyDown, false);
          return window.document.addEventListener('keyup', this$.onKeyUp, false);
        }
      },
      handleKeys: function(event, val){
        switch (event.keyCode) {
        case 38:
        case 87:
          return this$.setState('forward', val);
        case 37:
        case 65:
          return this$.setState('left', val);
        case 40:
        case 83:
          return this$.setState('back', val);
        case 39:
        case 68:
          return this$.setState('right', val);
        case 32:
          return this$.jump();
        }
      },
      onKeyDown: function(event){
        if (event.keyCode === 32) {
          return this$.jump();
        } else {
          return this$.handleKeys(event, true);
        }
      },
      jump: function(){
        if (this$.state.canJump) {
          this$.velocity.y += 10;
          setState('jumping', true);
          return setState('canJump', false);
        }
      },
      onKeyUp: function(event){
        return this.handleKeys(event, false);
      }
    };
  };
}).call(this);
