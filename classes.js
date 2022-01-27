// function Car(name) {
//   this.name = name;
//   this.getName = getName;
// }

// function getName() {
//   console.log(`this is the name of the car ${this.name}`);
// }

// const ford = new Car('ford');
// ford.getName();

// / ================================  /;

// function Car(name) {
//   this.name = name;
//   this.getName = function () {
//     console.log('this is the name oof the car :  ' + this.name);
//   };
// }
// const ford = new Car('ford');
// ford.getName();

// / ================================  /;
// function Car(name) {
//   this.name = name;
// }

// Car.prototype.getName = function () {
//   console.log(`this is the name of the car ${this.name}`);
// };
// const ford = new Car('ford');
// ford.getName();

// /==========================/ ;
const Car = function (name) {
  this.name = name;
};

Car.prototype = {
  getName: function () {
    console.log('hello there');
  },
};

const ford = new Car('ford');
ford.getName();
// /=======================/ ;

// class Car {
//   constructor(name) {
//     this.name = name;
//   }
//   getName() {
//     console.log(`this is the name of the car ${this.name} `);
//   }
// }

// const ford = new Car('ford');
// ford.getName();
