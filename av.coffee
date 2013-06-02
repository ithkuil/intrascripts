 
#requires PointerLockControls
       
nn = 0

orig = window.controls.update

window.controls.update = (delta) ->
 ret = orig.call window.controls, delta
 nn += 1
 if nn % 100 is 0
  window.console.log JSON.stringify(window.controls.getObject().position)
 ret
