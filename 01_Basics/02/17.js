// nested if-else

// winning number 19
// 17 too low
// 20 too high

let winningNumber = 19;
// let userGuess = +prompt("Enter your guess: ");
let userGuess = 20;

console.log(typeof userGuess, userGuess); // number 12

if (userGuess === winningNumber) {
  console.log("Congratulations! You've guessed the winning number!");
} else {
  if (userGuess < winningNumber) {
    console.log("Too low!");
  } else {
    console.log("Too high!");
  }
}

