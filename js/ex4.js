const totalwords = [];

let word = "";
while (word !== "stop") {
  word = prompt("Enter a word. Enter 'stop' to exit.");
  if (word !== "stop") {
    totalwords.push(word);
  }
}

console.log("You entered the following words:");
totalwords.forEach(w => {
  console.log(w);
});