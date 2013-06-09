define( [], function() {

  getPointerLock = function() {
    
    var havePointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;

    if ( havePointerLock ) {
      document.body.innerHTML = "<div id='blocker' style='height: 95%; z-index: 999; top: 50px; width: 100%; position: fixed;'></div>" + document.body.innerHTML;
      var element = document.getElementById('blocker');
      element.innerHTML = "<div id='pl1' style='position: fixed; border: 1px dotted white; height: 100px; top: 100px; left: 100px; z-index: 9999;'>Click to enable pointer lock</div>" + element.innerHTML ;
      //element = document.getElementById('pl1');
      var instructions = document.getElementById('pl1');
      var pointerlockchange = function ( event ) {
        if ( document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element ) {
          instructions.style.display = 'none';
          if (controls) { controls.enabled = true; }
        } else {
          instructions.style.display = 'block';
          if (controls) { controls.enabled = false; }
        }
      }

      var pointerlockerror = function ( event ) {
        instructions.style.display = '';
      }
      
      document.addEventListener( 'pointerlockchange', pointerlockchange, false );
      document.addEventListener( 'mozpointerlockchange', pointerlockchange, false );
      document.addEventListener( 'webkitpointerlockchange', pointerlockchange, false );

      document.addEventListener( 'pointerlockerror', pointerlockerror, false );
      document.addEventListener( 'mozpointerlockerror', pointerlockerror, false );
      document.addEventListener( 'webkitpointerlockerror', pointerlockerror, false );

      element.requestPointerLock = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;
      console.log('Pointerlock..');

      element.addEventListener('click', function() {
        console.log('clicked');
        if ( /Firefox/i.test( navigator.userAgent ) ) {
          var fullscreenchange = function ( event ) {
            if ( document.fullscreenElement === element || document.mozFullscreenElement === element || document.mozFullScreenElement === element ) {
              document.removeEventListener( 'fullscreenchange', fullscreenchange );
              document.removeEventListener( 'mozfullscreenchange', fullscreenchange );
              element.requestPointerLock();
            }
          }
          document.addEventListener( 'fullscreenchange', fullscreenchange, false );
          document.addEventListener( 'mozfullscreenchange', fullscreenchange, false );
          element.requestFullscreen = element.requestFullscreen || element.mozRequestFullscreen || element.mozRequestFullScreen || element.webkitRequestFullscreen;
          element.requestFullscreen();
        } else {
          console.log("Calling requestpointerlock on element");
          console.log(element);
          element.requestPointerLock();
        }
      });

    }
  }
  getPointerLock();
  return getPointerLock;  
});
