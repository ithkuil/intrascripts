(function(){
  var Looker, Mover, Avatar;
  Looker = window.Looker, Mover = window.Mover;
  window.Avatar = Avatar = (function(){
    Avatar.displayName = 'Avatar';
    var prototype = Avatar.prototype, constructor = Avatar;
    importAll$(prototype, arguments[0]);
    importAll$(prototype, arguments[1]);
    importAll$(prototype, arguments[2]);
    importAll$(prototype, arguments[3]);
    prototype.constructor = function(camera){
      this.camera = camera;
      return this.init();
    };
    prototype.isOnObject = function(bool){
      this.isOnObject = bool;
      return this.canJump = bool;
    };
    prototype.init = function(){
      this.listeners = [];
      this.initLooker();
      this.initMover();
      this.initWalker();
      return this.initStateBroadcaster();
    };
    prototype.getObject = function(){
      return this.yawObject;
    };
    prototype.update = function(delta){
      if (!this.enabled) {
        return;
      }
      delta *= 0.1;
      this.velocity.x += (function(it){
        return it - this.velocity.x;
      }) * 0.08 * delta;
      this.velocity.z += (function(it){
        return it - this.velocity.z;
      }) * 0.08 * delta;
      this.velocity.y -= 0.25 * delta;
      if (this.state.forward) {
        this.velocity.z -= 0.12 * delta;
      }
      if (this.state.back) {
        this.velocity.z += 0.12 * delta;
      }
      if (this.state.left) {
        this.velocity.x -= 0.12 * delta;
      }
      if (this.state.right) {
        this.velocity.x += 0.12 * delta;
      }
      if (this.state.isOnObject) {
        this.velocity.y = Math.max(0, this.velocity.y);
      }
      this.yawObject.translateX(this.velocity.x);
      this.yawObject.translateY(this.velocity.y);
      this.yawObject.translateZ(this.velocity.z);
      if (this.yawObject.position.y < 10) {
        this.velocity.y = 0;
        this.yawObject.position.y = 10;
        return this.state.canJump = true;
      }
    };
    function Avatar(){
      this.update = bind$(this, 'update', prototype);
      this.getObject = bind$(this, 'getObject', prototype);
      this.init = bind$(this, 'init', prototype);
      this.isOnObject = bind$(this, 'isOnObject', prototype);
      this.constructor = bind$(this, 'constructor', prototype);
    }
    return Avatar;
  }(Mover, Looker, Walker, StateBroadcaster));
  function bind$(obj, key, target){
    return function(){ return (target || obj)[key].apply(obj, arguments) };
  }
  function importAll$(obj, src){
    for (var key in src) obj[key] = src[key];
    return obj;
  }
}).call(this);
