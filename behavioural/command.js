const calculator = {
  add: function (x, y) {
    return x + y;
  },
  multiply: function (x, y) {
    return x * y;
  },
};

const manager = {
  execute: function (name, args) {
    if (name in calculator) {
      return calculator[name].apply(calculator, [].slice.call(args, 1));
    }
    return false;
  },
};

console.log(manager.execute('add', 5, 2)); //prints 7
