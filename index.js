#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10) + 1;
let guessNumber = await inquirer.prompt([
    {
        message: "guess a number between 1 to 10",
        type: 'number',
        name: "guessNumber"
    }
]);
if (randomNumber === guessNumber) {
    console.log("congratulation you won ");
}
else {
    console.log("you guess a wrong number");
}
