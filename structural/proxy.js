// As the name suggests, the Proxy Pattern provides a surrogate or placeholder for another object to control access, reduce cost, and reduce complexity.

const FlightListAPI = function () {
  return;
};

FlightListAPI.prototype = {
  getFlight: function () {
    console.log('this is the flight list');
  },

  searchFlight: function () {
    console.log('searchFlight');
  },
  addFlight: function () {
    console.log('addFlight');
  },
};

//creating the proxy
const FlightListProxy = function () {
  // getting a reference to thhe original object
  this.flightList = new FlightListAPI();
};

FlightListProxy.prototype = {
  getFlight: function () {
    return this.flightList.getFlight();
  },
  searchFlight: function () {
    return this.flightList.searchFlight();
  },
  addFlight: function () {
    return this.flightList.addFlight();
  },
};

// the proxy is like an object that stands in the middle between the client and the original object , and the client can not even know that there is a proxy object between him and the original object

const proxy = new FlightListProxy();
proxy.getFlight();
