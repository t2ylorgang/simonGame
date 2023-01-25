const gamePattern = [];
const buttonColors = ["red", "blue", "green", "yellow"];

// this returns a random number between 0 and 3.
function nextSequence() {
    return Math.floor(Math.random()*4)
};
// Setting the output of the above function to a variable.
const randomNumber = nextSequence();
// This sets "randomChosenColor" to a random color from the button colors array; this uses the random number to select from the array's index.
const randomChosenColor = buttonColors[randomNumber];
// Here I am using the "push" array method to add a random color to the "gamePattern" array.
gamePattern.push(randomChosenColor);

$("#" + randomChosenColor).fadeOut(100).fadeIn(100);