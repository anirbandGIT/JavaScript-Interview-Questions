// Problem Code: LUCKYFR
/* Impressed by the power of this number,
Karan has begun to look for occurrences of four anywhere.
He has a list of T integers,
for each of them he wants to calculate the number of occurrences
of the digit 4 in the decimal representation. He is too busy now, so please help him.
 */

/* Sample Input:
5
447474
228
6664
40
81
Sample Output:
4
0
1
1
0 */

// input
process.stdin.resume();
process.stdin.setEncoding("utf8");
let input = "";
process.stdin.on("data", (data) => {
  input += data;
});

// code goes here
function checkLuckyFourFrequency(input) {
  // console.log(input);
  // TODO: check why a "" array end elem is added to input
  const numberOfInputs = Number.parseInt(input[0]);
  const inputNumbers = input.splice(1);

  for (i = 0; i < numberOfInputs; i++) {
    console.log(inputNumbers[i]);
    const numberString = [...inputNumbers[i]];
    let occurenceOfFour = 0;

    for (j = 0; j < numberString.length; j++) {
      if (numberString[j] === "4") {
        occurenceOfFour += 1;
      }
    }
    console.log(occurenceOfFour);
  }
}

// end
// process.stdin.on("end", () => {
//   checkLuckyFourFrequency(input.split("\r\n"));
// });

process.on("SIGINT", () => {
  checkLuckyFourFrequency(input.split("\r\n"));
  process.exit(0);
});
