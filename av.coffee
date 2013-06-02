 
#requires PointerLockControls
       
nn = 0

orig = window.controls.update

window.controls.update = (delta) ->
 obj = window.controls.getObject()
 beforePos = obj.position.clone()
 ret = orig.call window.controls, delta
 diff = obj.position.sub beforePos
 if Math.abs(diff.x) > 0.001 or
    Math.abs(diff.y) > 0.001 or
    Math.abs(diff.z) > 0.001         
   window.console.log JSON.stringify(window.controls.getObject().position)
 ret
