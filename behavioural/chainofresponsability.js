// Event Handling in DOM is one implementation of the Chain of Responsibility pattern.

// Once an event is fired, it propagates through the DOM hierarchy, calling every event handler it runs into until it finds the appropriate “event listener” and then acts on it.

// taking the example of a bank ATM

const Request = function (amount) {
  this.amount = amount;
  console.log(`the requested amount is ${this.amount}`);
};

Request.prototype = {
  get: function (bill) {
    const count = Math.floor(this.amount / bill);
    this.amount -= count * bill;

    console.log(`dispense ${count}$ ${bill} bills`);
    return this;
  },
};

function run() {
  const request = new Request(375);
  request.get(100).get(50).get(20).get(50).get(1);
}

run();
