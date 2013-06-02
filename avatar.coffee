 
#based on mrdoob's pointerlockcontrols

class Avatar
  constructor: (@camera) ->
   
   
  init: =>   
    pitchObject = new THREE.Object3D()  
    if camera?
	   pitchObject.add @camera 

	   yawObject = new THREE.Object3D()
	   yawObject.position.y = 10
	   yawObject.add pitchObject

	   @moveForward = false
	   @moveBackward = false
	   @moveLeft = false
   	@moveRight = false
   
   	@isOnObject = false
   	@canJump = false
   
   	@velocity = new THREE.Vector3()
   
   	@PI_2 = Math.PI / 2
    
    if @camera?
      window.document.addEventListener 'mousemove', onMouseMove, false
	     window.document.addEventListener 'keydown', onKeyDown, false
	     window.document.addEventListener 'keyup', onKeyUp, false

	   @enabled = false
   
  onMouseMove: (event) =>   
   		if not scope.enabled then return
   
   		@movementX = event.movementX or event.mozMovementX or event.webkitMovementX or 0
   		@movementY = event.movementY or event.mozMovementY or event.webkitMovementY or 0
   
   		@yawObject.rotation.y -= @movementX * 0.002
   		@pitchObject.rotation.x -= @movementY * 0.002

		   @pitchObject.rotation.x = Math.max - PI_2, Math.min( PI_2, @pitchObject.rotation.x )


 	onKeyDown: (event) =>
 		switch event.keyCode 
 			when 38, 87 then @moveForward = true
    when 37, 65 then @moveLeft = true
    when 40, 83 then @moveBackward = true 
    when 39, 68 then @moveRight = true
    when 32  			
 				if @canJump @velocity.y += 10
 				@canJump = false

	onKeyUp: (event) =>
		switch  event.keyCode
  		when 38, 87 then @moveForward = true
    when 37, 65 then @moveLeft = true
    when 40, 83 then @moveBackward = true 
    when 39, 68 then @moveRight = true

 
	getObject: =>	@yawObject


 isOnObject: (boolean) =>
		@isOnObject = boolean
		@canJump = boolean

	
	this.update = function ( delta ) {

		if ( scope.enabled === false ) return;

		delta *= 0.1;

		velocity.x += ( - velocity.x ) * 0.08 * delta;
		velocity.z += ( - velocity.z ) * 0.08 * delta;

		velocity.y -= 0.25 * delta;

		if ( moveForward ) velocity.z -= 0.12 * delta;
		if ( moveBackward ) velocity.z += 0.12 * delta;

		if ( moveLeft ) velocity.x -= 0.12 * delta;
		if ( moveRight ) velocity.x += 0.12 * delta;

		if ( isOnObject === true ) {

			velocity.y = Math.max( 0, velocity.y );

		}

		yawObject.translateX( velocity.x );
		yawObject.translateY( velocity.y ); 
		yawObject.translateZ( velocity.z );

		if ( yawObject.position.y < 10 ) {

			velocity.y = 0;
			yawObject.position.y = 10;

			canJump = true;

		}

	};

};
