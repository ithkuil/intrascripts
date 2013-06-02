 
#requires PointerLockControls
       
orig = window.controls.update

window.controls.write = ->
 orig.call window.controls
 console.log window.controls.yawObject
    
    
alert "hello"
