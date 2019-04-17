output = "";
checkedMod = 0;
multipleA = 3;
multipleB = 5;
multipleC = 15;
messageA = "Fizz";
messageB = "Buzz";
messageC = "FizzBuzz";
function iterate(minTotal, maxTotal, iterateAmount) {
  for (i = minTotal; i <= maxTotal; i+= iterateAmount) {
    if ((i%multipleA == checkedMod) && (i%multipleB != checkedMod) &&
(i%multipleC != checkedMod)) {
      output += messageA;
    } else if ((i%multipleB == checkedMod) && (i%multipleC != checkedMod)) {
      output += messageB;
    } else if (i%multipleC == checkedMod) {
      output += messageC;
    } else {
      output += i;
    }
  }
  return output;
}
iterate(1, 100, 1);
