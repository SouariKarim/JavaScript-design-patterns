// This pattern is typically used when we need to handle object groups that share similar characters yet are different through appropriate custom calls. An example would bring more clarity.

// we do not have interfaces in js , this is an alternative

// in the example below we have the shapeFactory responsibke for creating new objects

function shapeFactory() {
  this.createShape = function (shapeType) {
    let shape;
    switch (shapeType) {
      case 'rectangle':
        shape = new Rectangle();
        break;
      case 'circle':
        shape = new Circle();
        break;
      case 'triangle':
        shape = new Triangle();
        break;
      default:
        shape = new Rectangle();
        break;
    }
    return shape;
  };
}

// constructor function for defining a new rectangle shape

const Rectangle = function () {
  this.draw = function () {
    console.log('this is a rectangle ');
  };
};

const Triangle = function () {
  this.draw = function () {
    console.log('this is a triangle !');
  };
};

const circle = function () {
  this.draw = function () {
    console.log('this is a circle !');
  };
};

let factory = new shapeFactory();

const rectangle = factory.createShape('rectangle');

rectangle.draw();
