Cyborg = function(myName) {
  this.name = myName;
  this.greet = function() {
    return "New cyborg, " + this.name + ", activated.";
  }
}
myCyborg = new Cyborg("Version 1");
myCyborg.greet();
