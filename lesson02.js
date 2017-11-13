'use strict';

// Objects
var car = {
    wheels: 4,
    color: 'red',
    mpg: 34,
    engine: 1,
    gallons: 12,
    'function': 'drive'
};

var otherCar = {};
otherCar.wheels = 4;
otherCar.color = 'red';
otherCar.mpg = 34;
otherCar.engine = 1;
otherCar.gallons = 12;

var bracketCar = {};
bracketCar['wheels'] = 4;
bracketCar['color'] = 'red';
bracketCar['mpg'] = 34;
bracketCar['engine'] = 1;
bracketCar['gallons'] = 12;

console.log(car);
console.log(otherCar);
console.log(bracketCar);

console.log(typeof car);

console.log(car.engine);
console.log(car.gallons);
car.gallons++;
console.log(car.gallons);
console.log(car['gallons']);
console.log(car['function']);

function Car (make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.brake = function () {
    return 'skreeeeeeeechh!';
  };
  this.pass = function () {
    return 'VROOOOOOOooooom';
  };
}

var car1 = new Car('honda', 'civic', 1998);
console.log(car1);

Car.prototype = {
  start: function () {
    return 'ignite the engine';
  },
  stop: function () {
    return 'stop the engine';
  },
  fullInfo: function () {
    return 'This is a ' + this.make + ' ' + this.model + ' from ' + this.year;
  }
};

var car2 = new Car('toyota', 'yaris', 1998);
car2.start = 'vroooom';
console.log(car2);
console.log(car2.fullInfo());
console.log(car2.stop());
console.log(car2.brake());
console.log(car2.pass());
