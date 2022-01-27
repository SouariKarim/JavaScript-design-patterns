// An object that supports cloning is called a prototype. Using the prototype pattern, we can instantiate new objects based on a template of an existing object through cloning.

const car = {
  wheels: 4,
  start() {
    console.log('started');
  },
  stop() {
    console.log('stopped');
  },
};

const myCar = Object.create(car, { owner: { name: 'karim' } });

// const myCar = Object.create(car);

// console.log(myCar.__proto__);

myCar.start();
