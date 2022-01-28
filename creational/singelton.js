// It creates a new instance of the class if one doesn’t exist and if existing already, it simply returns a reference to it. It is also known as the Strict Pattern.

// A singleton pattern solves two problems at the same time, violating the Single Responsibility Principle.

// Guarantees that there is only a single instance of a class.
// Provide a global access point to this instance.

const Singleton = (function () {
  let instance;
  function createInstance() {
    let object = new Object('i am an instance !! ');
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})(); // this is a self invoked function

function run() {
  const instance1 = Singleton();
  const instance2 = Singleton();
  // these two instances are the same , they were constructed from the same singleton instance , so we do not have to make a new instance of the root constructor  to use it in another process
}
