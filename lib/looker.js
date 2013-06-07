(function(){
  var this$ = this;
  window.Looker(function(){
    return {
      initLooker: function(){
        if (this$.camera != null) {
          return window.document.addEventListener('mousemove', this$.onMouseMove, false);
        }
      },
      onMouseMove: function(event){
        if (!this.enabled) {
          return;
        }
        this.movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
        this.movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;
        this.yawObject.rotation.y -= this.movementX * 0.002;
        this.pitchObject.rotation.x -= this.movementY * 0.002;
        return this.pitchObject.rotation.x = Math.max(-this.PI_2, Math.min(this.PI_2, this.pitchObject.rotation.x));
      }
    };
  });
}).call(this);
