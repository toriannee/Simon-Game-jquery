const buttonColors = ['red', 'blue', 'green', 'yellow'];
let randomChosenColor = [];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;

$(document).on('keypress', function () {
    if (!started) {
        $('h1').text('Level' + ' ' + level);
        nextSequence();
        started = true;


    }
});

$(".btn").click(function () {

    var userChosenColor = $(this).attr("id");
    console.log(userChosenColor);
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});


function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        let wrongSound = new Audio('sounds/wrong.mp3');
        wrongSound.play();
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}

function nextSequence() {
    userClickedPattern = [];
    level++
    $('h1').text('Level' + ' ' + level);

    randomNumber = Math.floor(Math.random() * 4);
    //Selects a random color from array
    randomChosenColor = buttonColors[randomNumber];
    //console.log(randomChosenColor)

    //adds random color to array
    gamePattern.push(randomChosenColor)
    switch (randomChosenColor) {
        case 'red':
            $('#red').fadeOut(100).fadeIn(100);
            let redSound = new Audio('sounds/red.mp3');
            redSound.play();
            break;
        case 'blue':
            $('#blue').fadeOut(100).fadeIn(100);
            var blueSound = new Audio('sounds/blue.mp3');
            blueSound.play();
            break;
        case 'green':
            $('#green').fadeOut(100).fadeIn(100);
            var greenSound = new Audio('sounds/green.mp3');
            greenSound.play();
            break;
        case 'yellow':
            $('#yellow').fadeOut(100).fadeIn(100);
            var yellowSound = new Audio('sounds/yellow.mp3');
            yellowSound.play();
            break;
    };


};


function animatePress(userChosenColor) {
    switch (userChosenColor) {
        case 'red':
            $('#red').addClass('pressed')
            setTimeout(function () {
                $('#red').removeClass('pressed')
            }, 100);
            let redSound = new Audio('sounds/red.mp3');
            redSound.play();
            break;
        case 'blue':
            $('#blue').addClass('pressed')
            setTimeout(function () {
                $('#blue').removeClass('pressed')
            }, 100);
            var blueSound = new Audio('sounds/blue.mp3');
            blueSound.play();
            break;
        case 'green':
            $('#green').addClass('pressed')
            setTimeout(function () {
                $('#green').removeClass('pressed')
            }, 100);
            var greenSound = new Audio('sounds/green.mp3');
            greenSound.play();
            break;
        case 'yellow':
            $('#yellow').addClass('pressed')
            setTimeout(function () {
                $('#yellow').removeClass('pressed')
            }, 100);
            var yellowSound = new Audio('sounds/yellow.mp3');
            yellowSound.play();
            break;
    };
};

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}





