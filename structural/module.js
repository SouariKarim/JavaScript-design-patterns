// Module Pattern is another prevalent JavaScript design pattern for keeping our code clean, separated, and organized.

function AnimalContainer() {
  const container = [];
  function addAnimal(name) {
    container.push(name);
  }

  function getAnimals() {
    console.log(container);
  }

  // return {
  //   add: addAnimal,
  //   get: getAnimals,
  // };
}

const container = new AnimalContainer();

// in here addAnimal is not known because it is private and the container variable is private too and cannot be reached with these internal methods so we have to rename them
// container.addAnimal('first');
// container.addAnimal('second');
// container.addAnimal('third');

// in here we renamed the private methods in the return so we can access them
container.add('first');
container.get();
