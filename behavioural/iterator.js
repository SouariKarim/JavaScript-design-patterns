// The Iterator Pattern lets you access and traverses through elements of an aggregate object (collection) sequentially without exposing its underlying representation.

const items = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
function Iterator(items) {
  this.items = items;
  // to start from the beginning position of the array
  this.index = 0;
}

Iterator.prototype = {
  // return true if there is a next element
  hasNext: function () {
    return this.index < this.items.length;
  },
  //return next element in the array
  next: function () {
    return this.items[this.index++];
  },
};

const iterator = new Iterator(items);
while (iterator.hasNext()) {
  console.log(iterator.next());
  this.index++;
}
