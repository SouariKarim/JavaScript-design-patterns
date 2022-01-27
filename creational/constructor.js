// The constructor pattern is one of the most simple, popular, and modern JS design patterns. As suggested by the name, the purpose of this pattern is to aid constructor creation.

// function Person (name , age ) {
//   this.name = name ;
//   this.age = age ;
//   this.hello = function () {
//     console.log(` hello there , my name is ${this.name} `)
//   }
// }

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello() {
    console.log(`hello there , this is ${this.name}`);
  }
}

const karim = new Person('karim');

karim.hello();
