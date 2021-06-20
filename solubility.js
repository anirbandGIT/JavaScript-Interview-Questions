// Problem Code: SOLBLTY
/* Suppose for a unit rise in temperature,
the solubility of sugar in water increases by Bg100 mL.

Chef does an experiment to check how much sugar (in g)
he can dissolve given that he initially has 1 liter of water at X degrees
and the solubility of sugar at this temperature is Ag100 mL.
Also, Chef doesn't want to lose any water so he can increase the temperature to
at most 100 degrees.

Assuming no loss of water takes place during the process,
find the maximum amount of sugar (in g) can be dissolved in
1 liter of water under the given conditions. */

/* Sample Input
3
40 120 1
35 120 2
40 115 3
Sample Output
1800
2500
2950 */

// input
process.stdin.resume();
process.stdin.setEncoding("utf8");
let input = "";
process.stdin.on("data", (data) => {
  input += data;
});

// code goes here
function checkSugarSolubility(input) {
  console.log(input);
  numOfTestCases = Number.parseInt(input[0]);
  testCaseArr = input.splice(1);
  for (testCase of testCaseArr) {
    if (testCase !== "") {
      const [X, A, B] = testCase
        .split(" ")
        .map((elem) => Number.parseFloat(elem));
      const solubility = (A + (100 - X) * B) * 10;
      console.log(solubility);
    }
  }
}

// end
// process.stdin.on("end", () => {
//   checkSugarSolubility(input.split("\r\n"));
// });

process.on("SIGINT", () => {
  checkSugarSolubility(input.split("\r\n"));
  process.exit(0);
});
