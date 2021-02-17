const totalwords = [];

let word = "";

while (word.toLowerCase() !== "stop") {
  word = prompt("Enter a word. Enter stop to exit.");
  if (word.toLowerCase() !== "stop") {
    totalwords.push(word);
  }
}

console.log("You entered the following words:");
totalwords.forEach(w => {
  console.log(w);
});