var Bee = function() {
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

/*
///////// GRUB code ///////
var Grub = function() {

  passedInCallObject.age = 0;
  passedInCallObject.color = 'pink';
  passedInCallObject.food = 'jelly';
  return this;
};
Grub.prototype.constructor = Grub;
Grub.prototype.eat = function(){};
///////////////////////////

var myGrub = new Grub();
// myGrub can access the prototypal methods .eat

var myBee = new Bee();
// myBee can only access its own properties and
// Object.prototype methods

// myBee.prototype should be empty
// myBee.prototype looks like this: {}  --> {Grub.eat}
// but if you try to look up a method or property
// on myBee, and it's not in the myBee.prototype {},
// it'll look up the prototype chain
Bee.prototype.constructor = Bee;

*/