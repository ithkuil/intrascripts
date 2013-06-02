 
#requires PointerLockControls
       
nn = 0

orig = window.controls.update

window.controls.update = (delta) ->
 ret = orig.call window.controls, delta
 nn += 1
 if false and nn % 1000 is 0
  window.console.log JSON.stringify(window.camera.position)
 ret
    
alert "hi2"
