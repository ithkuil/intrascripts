 
#requires PointerLockControls
       
nn = 0

orig = window.controls.update

window.controls.update = (delta) ->
 obj = window.controls.getObject()
 beforePos = obj.position.clone()
 ret = orig.call window.controls, delta
 diff =
  x: beforePos.x - obj.position.x
  y: beforePos.y - obj.position.y
  z: beforePos.z - obj.position.z
 if Math.abs(diff.x) > 1.001 or
    Math.abs(diff.y) > 1.001 or
    Math.abs(diff.z) > 1.001       
   nn += 1
   if nn % 10 is 0
    window.console.log "diff is: #{JSON.stringify(diff)}"
   #window.console.log JSON.stringify(window.controls.getObject().position)
 ret
