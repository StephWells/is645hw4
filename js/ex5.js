const word = prompt("Please enter a word");


let bWord = "";
let vCnt = 0;

[...word].forEach(letter => {
  const vLetter = letter.toLowerCase();
  if (
    vLetter === "a" ||
    vLetter === "e" ||
    vLetter === "i" ||
    vLetter === "o" ||
    vLetter === "u" ||
    vLetter === "y"
  ) {
    vCnt++;
  }
 
  bWord = letter + bWord;
});


{console.log(`${word} contains ${vCnt} vowel(s)`)};

if (word.toLowerCase() === bWord.toLowerCase()) {
  console.log("and is a palindrome");}
else 
console.log("and is not a palindrome");