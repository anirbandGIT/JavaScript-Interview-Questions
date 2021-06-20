// Problem Code: SLOOP
/* Chef is a big fan of Coldplay.
Every Sunday, he will drive to a park taking M minutes to reach there,
and during the ride he will play a single song on a loop.
Today, he has got the latest song which is in total S minutes long.
He is interested to know how many times will he be able to play the song completely. */

/* Sample Input
3
10 5
10 6
9 10
Sample Output
2
1
0 */

process.stdin.resume();
process.stdin.setEncoding("utf8");

// input
let input = "";
process.stdin.on("data", (data) => {
  //   console.log(`You typed ${data.toString("utf-8")}`);
  input += data;
});

// code goes here
function checkSong(input) {
  let numOfSongs = input[0];
  let songs = input.slice(1);
  //   console.log("numOfSongs", numOfSongs);
  //   console.log("songs", songs);
  numOfSongs = Number.parseInt(numOfSongs);
  for (song of songs) {
    if (song !== "") {
      // TODO: check why a "" array end elem is added to input
      let [rideDuration, songDuration] = song
        .split(" ")
        .map((elem) => Number.parseInt(elem));
      const playedTimes = Math.floor(rideDuration / songDuration);
      console.log(playedTimes);
    }
  }
}
// end
// process.stdin.on("end", () => checkSong(input.split("\r\n")));
process.on("SIGINT", () => {
  //   console.log("REPL Complete", input);
  checkSong(input.split("\r\n"));
  process.exit(0);
});
