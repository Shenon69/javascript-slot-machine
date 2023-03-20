// 1. deposit money
// 2. number of lines to bet on
// 3. collect the bet amount
// 4. spin the slot machine
// 5. check the user won
// 6. give the looser thier winnings
// 7. play again

const prompt = require("prompt-sync")();

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter the deposit amount: ");
    const numberDpositAmount = parseFloat(depositAmount);

    if (isNaN(depositAmount) || depositAmount <= 0) {
      console.log("Invalid deposit amount! Try again.");
    } else {
      return numberDpositAmount;
    }
  }
};

const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter the number of lines to bet on(1-3): ");
    const numberOfLines = parseFloat(lines);

    if (isNaN(lines) || lines <= 0 || lines > 3) {
      console.log("Invalid line number! Try again.");
    } else {
      return numberOfLines;
    }
  }
};

let balance = deposit(); //cause the amount we dopsit is the balance and it will change accordingly
const numberOfLines = getNumberOfLines();
