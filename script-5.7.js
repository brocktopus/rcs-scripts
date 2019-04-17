alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
output = "";
for (i=0;i<Math.floor(Math.random() * alphabet.length);i++) {
  output += alphabet[Math.floor(Math.random() * alphabet.length)];
}
output;
