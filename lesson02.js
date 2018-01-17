// Objects: in this section we'll learn
// * Declare
// * Assign
// * Modify
// * Prototype

'use strict';

// Objects

// In JavaScript there are three ways of creating objects
// * Declarative notation
// * Dot notation
// * Bracket notation
//
// Choosing between them is difficult, but the dot notation
// seems more familiar, at least for me.

// Declaring an object car with declarative notation
// It's a good way to initialize objects.
var car = {
    wheels: 4,
    color: 'red',
    mpg: 34,
    engine: 1,
    gallons: 12
};

// Declaring an object otherCar with dot notation
var otherCar = {};
otherCar.wheels = 4;
otherCar.color = 'red';
otherCar.mpg = 34;
otherCar.engine = 1;
otherCar.gallons = 12;

// Declaring an object bracketCar using bracket notation.
// Unless you want to add a rare symbol or a reserved word
// in the property avoid using it.
var bracketCar = {};
bracketCar['wheels'] = 4;
bracketCar['color'] = 'red';
bracketCar['mpg'] = 34;
bracketCar['engine'] = 1;
bracketCar['gallons'] = 12;

// Display the content of each object
console.log(`car =`, car);
console.log(`otherCar =`, otherCar);
console.log(`bracketCar =`, bracketCar);

// Display the type of each object, the three of them are type object
console.log(`\ncar type = ${typeof car}`);
console.log(`otherCar type = ${typeof otherCar}`);
console.log(`bracketCar type = ${typeof bracketCar}`);

// Operating in an object property
// We are filling up the tank of the car by 1 gallon
console.log(`\ncar.gallons = ${car.gallons}`);
car.gallons++;
console.log(`car.gallons = ${car.gallons}`);

// We could also access the property via brackets
console.log(`car.gallons = ${car['gallons']}`);

// This is called a constructor, it serves to create a new Car object
// See that here we are assigning functions to some properties of the car.
// Also we are passing parameters to fill up some properties.
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.brake = function () {
        return 'skreeeeeeeechh!';
  };
  this.takeOver = function () {
        return 'VROOOOOOOooooom';
  };
}

// Creating a new Car using the constructor.
var car1 = new Car('honda', 'civic', 1998);
console.log(`\nconstructedCar =`, car1);

// Prototyping is a way to ensure that all objects of a type will
// have the same structure.
// In this case we want all cars to have this properties.

function CarInfo() {
    this.start = function () {
        return 'ignite the engine';
    };
    this.stop = function () {
        return 'stop the engine';
    };
    this.fullInfo = function () {
        return 'This is a ' + this.make + ' ' + this.model + ' from ' + this.year;
    };
}

Car.prototype = new CarInfo();

// Now we are creating a nre car Using the constructor, but this time is
// affected by the prototype
var car2 = new Car('toyota', 'yaris', 1998);
console.log(`\nprototypedCar =`, car2);

// Notice that printing this doesn't show anything about the prototype
// What will happen if we print car2.prototype
console.log(`\ncar2.prototype =`, car2.prototype);

// Still nothing, is my prototype working?
console.log(`car2 full info = ${car2.fullInfo()}`);

// Yes it is! So how can I see the prototype properties on my object?
// You'll have to use Object.getPrototypeOf function
console.log(`\ncar2.prototype =`, Object.getPrototypeOf(car2));

// Since it is an object we can create custom implementations for each
// property defined in the prototype.
car2.start = 'vroooom';
console.log(`\nmodified prototypedCar =`, car2);

// And you can use the properties both from the Car itself as the prototype.
console.log(`\n${car2.fullInfo()}`);
console.log(car2.stop());
console.log(car2.brake());
console.log(car2.start);

// Even after modifying it the prototype remains the same, it only changes the object.
console.log(`\ncar2.prototype =`, Object.getPrototypeOf(car2));