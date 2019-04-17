myData = [2, 5, 9, 6, 3, 1, 8, 4, 7];
function mySort(input)
{
  for (j = input.length-1;j >= 0; j--) {
    for(i=0;i < input.length-1; i++) {
      if (input[i] > input[i+1]) {
        tempData = input[i];
        input[i] = input[i+1];
        input[i+1] = tempData;
      }
    }
  }
  return input;
}
mySort(myData);
