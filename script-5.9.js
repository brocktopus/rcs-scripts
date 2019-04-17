function iterate() {
  output = "";
  for(var i=1;i<=100;i++) {
    if (i%15==0) {
    output += "FizzBuzz";
    } else if (i%3==0) {
      output += "Fizz";
    } else if (i%5==0) {
      output += "Buzz";
    } else {
      output += i;
    }
  }
  return output;
}
iterate();
