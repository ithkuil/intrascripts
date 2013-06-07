Drawable =
  draw: -> console.log @pos

  update: ->
    @pos += @vel

Car =
  initCar: ->
    console.log 'hi'
    @vel = 1
    @pos = 0


class Ride implements Drawable, Car
  ->
    @id = Math.random! * 1000
    @initCar!

ride = new Ride
#ride.initCar!

ride.draw!

ride.update!
ride.update!

ride.draw!

