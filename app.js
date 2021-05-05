import { checkNumber } from "./utils.js";

// import functions and grab DOM elements
const button = document.getElementById('guess-button');
const resultsDiv = document.getElementById('results');
const highLow = document.getElementById('high-low');
const attempts = document.getElementById('attempts');


// initialize state
let number = Math.ceil(Math.random()*20);
let win = 0;
let lose = 0;
let guess = 4;

// set event listeners to update state and DOM

button.addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value;
    const input = Number(userInput);
    if (checkNumber(number, input) === true){
        win++;} else {lose++;}
    if (input === number){
        resultsDiv.textContent = `You guessed right, your number was ${number}`;
    }   if (input < number){
            resultsDiv.textContent = "You guessed too low!";
        guess--;        
        }
        if(input > number) {
            resultsDiv.textContent = "You guessed to high!";
            guess--;
        }
        attempts.textContent = `Attempts remaining: ${guess}`;
    });