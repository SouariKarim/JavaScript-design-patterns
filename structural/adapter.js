// The adapter is a structural JS design pattern that allows objects or classes with incompatible interfaces to collaborate.
// This pattern will include a class that will be responsible for joining the incompatible interfaces/functionalities.

// the old interface and the new interfae in this example are quite different so this pattern will try to make them collaborate without being compatible

// this is the old interface
function TicketPrice() {
  this.request = function (start, end) {
    // price calculation code
    return '150$';
  };
}

// this is the new interface wich has new features than the old interface like user login ..
function NewTicketPrice() {
  this.login = function () {
    return;
  };
  this.setStart = function (start) {
    return;
  };

  this.calculate = function () {
    return '180$';
  };
}

/// this is the adapter interface , this is like a class to construct objects
function Adapter(credentials) {
  const pricing = new NewTicketPrice();

  pricing.login(credentials);

  return {
    //
    request: function (start) {
      pricing.setStart(start);

      return pricing.calculate();
    },
  };
}

const pricing = new TicketPrice(); // this is the old pricing method
const credentials = 'credentials';
const adapter = new Adapter(credentials);

let price = pricing.request(); // this is the old price
price = adapter.request(); // this is the new price wich uses the new features of the new interface
console.log(price);
