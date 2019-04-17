noun = ["apple", "banana", "canteloupe"]; // Expand these vocabulary lists for more interesting results! - see file 'script-5.16-wordlists.js' for a sample set
verb = ["act", "bellow", "cry"];
adjective = ["angry", "beaming", "cold"];
quantity = ["all", "few", "half"];
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
  return "New cyborg, " + name + ", activated.";
};
Cyborg.prototype.singularize = function(term) {
  iesLetters = "aeou";
  esLetters = "hosx";
  if (term.charAt(term.length-1) == "y") {
  if (iesLetters.indexOf(term.charAt(term.length-2)) == -1) {
      temp = "";
      for (i = 0; i < term.length-1; i++) {
        temp = temp + term.charAt(i);
      }
      term = temp + "ies";
    }
    else {
      term = term + "s";
    }
  }
  else if (esLetters.indexOf(term.charAt(term.length-1)) != -1) {
    term = term + "es";
  }
  else {
    term = term + "s";
  }
  return term;
}
Cyborg.prototype.randomize = function(list) {
  randomTerm = list[Math.floor(Math.random() * (list.length))];
  return randomTerm;
}
Cyborg.prototype.enthymemeGenerate = function() {
  amount = this.randomize(quantity);
  subject1 = this.randomize(noun);
  subject2 = this.randomize(noun);
  action = this.randomize(verb);
  directObject = this.randomize(noun);
  this.sentence("major", amount, subject1, subject2, action, directObject);
  this.sentence("minor", amount, subject1, subject2, action, directObject);
return output;
}
Cyborg.prototype.sentence = function(type, amount, subject1, subject2, action, directObject) {
  if (type == "major") {
    myQuantity = amount;
    mySubject = this.singularize(subject1);
    myVerb = action;
    directObject = this.singularize(directObject);
    majorPremise = myQuantity + " " + mySubject + " " + myVerb + " " + directObject + ".";
    majorPremise = majorPremise[0].toUpperCase() + majorPremise.substring(1);
    output = majorPremise;
  } else if (type == "minor") {
    mySubject = subject2;
    myVerb = this.singularize(action);
    directObject = this.singularize(directObject);
    minorPremise = mySubject + " " + myVerb + " " + directObject + ".";
    minorPremise = minorPremise[0].toUpperCase() + minorPremise.substring(1);
    output += " " + minorPremise;
  }
}
cyborg1 = new Cyborg("Grover", "1");
cyborg1.enthymemeGenerate();
