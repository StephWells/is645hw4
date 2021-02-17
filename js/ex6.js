randNum = Math.floor((Math.random() * 100) + 1);
let attempts = 0;
while(true){
    num = Number(prompt("Guess my number. (Between 1 and 100, inclusive.)"));
    attempts++;
    if(num == randNum){
        console.log(`Correct! It only took you ${attempts} tries to guess the correct number:)`);
        break;
    }else if(num < randNum){
        alert("Too low, guess again!");
    }else if(num > randNum){
        alert("Too high, guess again");
    }
}