define( [], function() {

  getPointerLock = function() {
    
    var havePointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;

    if ( havePointerLock ) {
      
      var element = document.body;
      element.innerHTML = "<div id='pl1' style='position: fixed; border: 1px dotted white; height: 100px; top: 100px; left: 100px; z-index: 9999;'>Click to enable pointer lock" + element.innerHTML + "</div>"
      element = document.getElementById('pl1');

      var pointerlockchange = function ( event ) {
        if ( document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element ) {
          controls.enabled = true;
        } else {
          controls.enabled = false;
        }
      }

      var pointerlockerror = function ( event ) {
        instructions.style.display = '';
      }
      element.innerHTML = "<div style='position: fixed; top: 100px; left: 100px; z-index: 9999;'>Click to enable pointer lock" + element.innerHTML + "</div>";
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
      }

    }
  }
  getPointerLock();
  return getPointerLock;  
});
