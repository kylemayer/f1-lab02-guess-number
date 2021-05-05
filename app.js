// import functions and grab DOM elements
const button = document.getElementById('guess-button');
const userInput = document.getElementById('user-input');
const resultsDiv = document.getElementById('results');
const highLow = document.getElementById('high-low');
const attempts = document.getElementById('attempts');


// initialize state
button.addEventListener('click', () => {
    console.log(button, userInput, resultsDiv, highLow, attempts);

});


// Math.ceil(Math.random() * 20)


// set event listeners to update state and DOM