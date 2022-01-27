// Composite is a structural JavaScript design pattern that lets you compose objects into tree structures and then work with these structures as if they were individual objects.
// The composite pattern reduces the complexity of a system by allowing you to work with small objects and build them up into larger ones.
// Modern JS frameworks like React and Vue use the composite pattern to build user interfaces.

// this is a form of a class in js
function File(name) {
  this.name = name;
}
File.prototype.display = function () {
  console.log(this.name);
};

function Directory(name) {
  this.name = name;
  this.files = [];
}

Directory.prototype.add = function (file) {
  this.files.push(file);
};
Directory.prototype.remove = function (file) {
  for (let i; i < files.length; i++) {
    if (this.files[i] === file) {
      this.files.splice(i, 1);
      return true;
    }
  }

  return false;
};

Directory.prototype.getFileName = function (index) {
  return this.files[index].name;
};

Directory.prototype.display = function () {
  console.log(this.name);
  for (let i = 0; i < this.files.length; i++) {
    console.log('  ', this.getFileName(i));
  }
};
const directory1 = new Directory('directory one');
const directory2 = new Directory('directory two');

const file1 = new File('file one');
const file2 = new File('file two');

directory1.add(file1);

directory1.display();
