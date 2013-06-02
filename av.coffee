 
#requires PointerLockControls
       
orig = window.controls.update

window.controls.update = (delta) ->
 orig.call window.controls delta
 console.log JSON.stringify(window.camera.position)
    
    
alert "hi"
