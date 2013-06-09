define( ['pointerlock', 'world'], function(pl, world) {
  addType('looker', function() {
    window.addEventListener('hookControls', function(camera) {
      window.document.addEventListener('mousemove', onMouseMove, false);
      var self = this;

      this.pitchObject = new THREE.Object3D();  
      this.pitchObject.add(camera);

      this.yawObject = new THREE.Object3D()
      this.yawObject.position.y = 10;
      this.yawObject.add(this.pitchObject);

      this.PI_2 = Math.PI / 2;

      onMouseMove = function (event) {
        //if (!self.enabled) return;

        self.movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
        self.movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;

        self.yawObject.rotation.y -= self.movementX * 0.002;
        self.pitchObject.rotation.x -= self.movementY * 0.002;

        self.pitchObject.rotation.x = Math.max(-self.PI_2, Math.min( self.PI_2, self.pitchObject.rotation.x ));
      }

    });  
  })
});