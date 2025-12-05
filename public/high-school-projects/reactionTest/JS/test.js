let x;
let time;
let countDown = false;
let elapsedTime = 0;
let rounds = 0;
let startTime;

function startGame() {

    time = 0;
    countDown = true;
    elapsedTime = 0;

    time = Math.floor(Math.random() * 300) + 1;
    x = setInterval(updateTimer, 10);

    rounds++

    startTime = performance.now();
    setTimeout(updateTimer, time);

}

function updateTimer() {

    elapsedTime = performance.now() - startTime;

    if (countDown) {
        time--;
        if (time === 0) {
            countDown = false;
        }
    } else {
        time++;
    }
}


let reactionTimes = {};
let average;
let highscore = 10000;

function stopTimer() {
    if (rounds === 5) {
        if (average < highscore) {
            highscore = average;
        }

    } else {
        clearInterval(x);


        let date = new Date();
        let dateString = date.toUTCString();

        reactionTimes[dateString] = time;
        localStorage.setItem("reactionTimes", JSON.stringify(reactionTimes));
    }
}


function setAverageReactionTime() {

    let values = Object.values(reactionTimes);
    let sum = values.reduce((accumulator, currentValue) => accumulator + currentValue);

    average = sum / values.length;
    average = average.toFixed(0);

}


function resetGame() {
    clearInterval(x); // stop the timer
    average;
    rounds = 0;
    time = 0;
    countDown = true;
    elapsedTime = 0;
    reactionTimes = [];
}


for (let i = 0; i <= 5; i++) {
    if (countDown = true) {
    document.getElementById("timer").innerHTML = 'Too soon!'
    }
}