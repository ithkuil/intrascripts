(function(){
  window.Mover = function(){
    return {
      initMover: function(){
        this.pitchObject = new THREE.Object3D();
        if (this.camera != null) {
          this.pitchObject.add(this.camera);
        }
        this.yawObject = new THREE.Object3D();
        this.yawObject.position.y = 10;
        this.yawObject.add(this.pitchObject);
        this.velocity = new THREE.Vector3();
        this.acceleration = new THREE.Vector3();
        this.PI_2 = Math.PI / 2;
        return this.enabled = false;
      }
    };
  };
}).call(this);
