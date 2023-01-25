var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence() {
    // this returns a random number between 0 and 3.
    var randomNumber = Math.floor(Math.random()*4)
    // This sets "randomChosenColor" to a random color from the button colors array; this uses the random number to select from the array's index.
    var randomChosenColor = buttonColors[randomNumber];
    // Here I am using the "push" array method to add a random color to the "gamePattern" array.
    gamePattern.push(randomChosenColor);
    // This makes an animation for the random color generated.
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
    // This plays the corresponding audio.
    var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play();
};

$(".btn").on("click", function(e) {
    var userChosenColor = e.target.id;
    userClickedPattern.push(userChosenColor);
});

console.log(userClickedPattern);