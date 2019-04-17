function Person(firstName) {
  this.firstName = firstName;
}
function Machine(serial) {
  this.serial = serial;
}
Cyborg = function(firstName,serial) {
  Person.call(this,firstName);
  Machine.call(this,serial);
  name = firstName + "-" + serial;
  birthdate = Date();
};
cyborg1 = new Cyborg("Grover", "1");
Cyborg.prototype.greet = function() {
  return "Hello world, I am " + name + "! I was created on " + birthdate + ". Despite my first-person statements, I am not quite self-aware. " + this.ageUpdate();
}
Cyborg.prototype.ageUpdate = function() {
  age = Date.parse(Date())-Date.parse(birthdate);
  ageSec = (age / 1000) % 60;
  ageMin = (age / 60000) % 60;
  ageHrs = (age / 3600000) % 24;
  ageDays = (age / 86400000);
  return "I am " + Math.floor(ageDays) + " days, " + Math.floor(ageHrs) + " hours, " + Math.floor(ageMin) + " minutes, and " + Math.floor(ageSec) + " seconds old. ";
}
 cyborg1.greet();
