(function(){
  var Drawable, Car, Ride, ride;
  Drawable = {
    draw: function(){
      return console.log(this.pos);
    },
    update: function(){
      return this.pos += this.vel;
    }
  };
  Car = {
    initCar: function(){
      console.log('hi');
      this.vel = 1;
      return this.pos = 0;
    }
  };
  Ride = (function(){
    Ride.displayName = 'Ride';
    var prototype = Ride.prototype, constructor = Ride;
    importAll$(prototype, arguments[0]);
    importAll$(prototype, arguments[1]);
    function Ride(){
      this.id = Math.random() * 1000;
      this.initCar();
    }
    return Ride;
  }(Drawable, Car));
  ride = new Ride;
  ride.draw();
  ride.update();
  ride.update();
  ride.draw();
  function importAll$(obj, src){
    for (var key in src) obj[key] = src[key];
    return obj;
  }
}).call(this);
