/* Pooja would like to withdraw X $US from an ATM.
The cash machine will only accept the transaction if X is a multiple of 5,
and Pooja's account balance has enough cash to perform the withdrawal transaction
(including bank charges). For each successful withdrawal the bank charges 0.50 $US.
Calculate Pooja's account balance after an attempted transaction. */

/* Sample Input:
30 120.00
Sample Output:
89.50 */

/* Sample Input:
42 120.00
Sample Output:
120.00 */

/* Sample Input:
300 120.00
Sample Output:
120.00 */

process.stdin.resume();
process.stdin.setEncoding("utf8");

// input
let input = "";
process.stdin.on("data", (data) => {
  //   console.log(`You typed ${data.toString("utf-8")}`);
  input += data;
});

// code goes here
function withdrawCash(input) {
  let [withdrawAmt, balance] = input.map((elem) => Number.parseFloat(elem));
  //   console.log("withdrawAmt", typeof withdrawAmt);
  //   console.log("balance", typeof balance);
  if (
    withdrawAmt > 0 &&
    withdrawAmt <= balance - 0.5 &&
    withdrawAmt % 5 === 0
  ) {
    balance = balance - withdrawAmt - 0.5;
  }
  console.log(balance.toFixed(2));
}

// end
// process.stdin.on("end", () => withdrawCash(input.split(" ")));
process.on("SIGINT", () => {
  //   console.log("REPL Complete", input);
  withdrawCash(input.split(" "));
  process.exit(0);
});
