 
#requires PointerLockControls
       
nn = 0

orig = window.controls.update

window.controls.update = (delta) ->
 orig.call window.controls, delta
 nn += 1
 if nn % 1000 is 0
  console.log JSON.stringify(window.camera.position)
    
    
alert "hi2"
