function iterate() {
  output = "";
  for(i=1;i<=100;i++) {
    if ((i%3==0) || (i%5==0)) {
      if (i%3==0) {
        output += "Fizz";
      }
      if (i%5==0) {
        output += "Buzz";
      }
    } else {
    output += i;
    }
  }
  return output;
}
iterate();
