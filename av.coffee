 
#requires PointerLockControls
       
nn = 0

orig = window.controls.update

window.controls.update = (delta) ->
 orig.call window.controls, delta
 nn += 1
 if false and nn % 1000 is 0
  window.console.log JSON.stringify(window.camera.position)
 return
    
alert "hi2"
