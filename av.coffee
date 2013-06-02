 
#requires PointerLockControls
       
nn = 0

orig = window.controls.update

window.controls.update = (delta) ->
 obj = window.controls.getObject()
 beforePos = obj.position.clone()
 ret = orig.call window.controls, delta
 if not (beforePos.equals obj.position)
   window.console.log JSON.stringify(window.controls.getObject().position)
 ret
