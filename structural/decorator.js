// aim to add properties and methods to objects dynamically , and provide an alternative to subclassing for extending functionality

function Car(name) {
  this.name = name;
}

const ford = new Car('ford');
// this is the method that we want to add to the object and wont affect the root constructor
ford.setModel = function (modelName) {
  this.model = modelName;
};

ford.setModel('titanium');
// this is another object but the root constructor did not change
const marcedes = new Car('marcedes');
console.log(marcedes);
