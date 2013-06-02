 
#requires PointerLockControls
       
orig = window.controls.update

window.controls.update = ->
 orig.call window.controls
 console.log window.camera.position
    
    
alert "hello"
