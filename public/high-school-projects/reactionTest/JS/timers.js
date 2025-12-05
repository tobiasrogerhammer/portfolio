let x;
let time;
let countDown = false;
let elapsedTime = 0;
let rounds = 0;
let startTime;

function startGame() {
    document.getElementById("stopbutton").innerHTML = 'Wait for green!';
    document.getElementById("timer").innerHTML = '';

    document.body.classList.add("wait");
    document.getElementById("header").classList.add("waitHeader");

    document.getElementById("start").style.display = "none";
    document.getElementById("explanation").style.display = "none";
    document.getElementById("clock").style.display = "none";
    document.getElementById("boxes").style.display = "flex";
    document.getElementById("box1").style.display = "block";
    document.getElementById("box2").style.display = "block";
    document.getElementById("box3").style.display = "block";
    document.getElementById("stopbutton").style.display = "block";

    document.getElementById("stopbutton").disabled = true;

    time = 0;
    countDown = true;
    elapsedTime = 0;

    time = Math.floor(Math.random() * 300) + 1;
    x = setInterval(updateTimer, 10);

    rounds++

    if (rounds === 5) {
        document.getElementById("bestScore").innerHTML = 'Tries:  5/5';
    } else if (rounds === 4) {
        document.getElementById("bestScore").innerHTML = 'Tries:  4/5';
    } else if (rounds === 3) {
        document.getElementById("bestScore").innerHTML = 'Tries:  3/5';
    } else if (rounds === 2) {
        document.getElementById("bestScore").innerHTML = 'Tries:  2/5';
    } else if (rounds === 1) {
        document.getElementById("bestScore").innerHTML = 'Tries:  1/5';
    }

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

    if (time === 0) {
        document.getElementById("stopbutton").innerHTML = 'Tap now!';

        document.body.classList.remove("wait");
        document.getElementById("header").classList.remove("waitHeader");
        document.getElementById("header").classList.add("tapHeader");
        document.body.classList.add("tap");

        document.getElementById("clock").style.display = "flex";
        document.getElementById("boxes").style.display = "none";
        document.getElementById("box1").style.display = "none";
        document.getElementById("box2").style.display = "none";
        document.getElementById("box3").style.display = "none";

        document.getElementById("stopbutton").disabled = false;

    }
}


let reactionTimes = {};
let average;
let highscore = 10000;

function stopTimer() {
    if (rounds === 5) {
        document.getElementById("timer").innerHTML = 'Congratulations, round over!';
        document.getElementById("bestScore").innerHTML = 'Best average:  ' + highscore + '0 ms';

        document.getElementById("start").style.display = "none";
        document.getElementById("stopbutton").style.display = "none";
        document.getElementById("clock").style.display = "none";
        document.getElementById("average").style.display = "block";

        document.body.classList.remove("tap");
        document.getElementById("header").classList.remove("tapHeader");

        if (average < highscore) {

            highscore = average;

            document.getElementById("bestScore").innerHTML = 'Best average:  ' + highscore + '0 ms';
            document.getElementById("timer").innerHTML = 'CONGRATULATIONS! NEW HIGH SCORE';
        }

    } else {
        document.getElementById("timer").innerHTML = time + '0ms reaction time';

        document.getElementById("stopbutton").style.display = "none";
        document.getElementById("start").style.display = "block";
        document.getElementById("average").style.display = "block";

        document.body.classList.remove("tap");
        document.getElementById("header").classList.remove("tapHeader");

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

    document.getElementById("average").innerHTML = 'Average:  ' + average + '0ms';
}




function resetGame() {
    clearInterval(x); // stop the timer
    average;
    rounds = 0;
    time = 0;
    countDown = true;
    elapsedTime = 0;
    reactionTimes = [];

    document.getElementById("timer").innerHTML = '';
    document.getElementById("average").innerHTML = 'Average of 5:';
    document.getElementById("bestScore").innerHTML = 'Best average:  ' + highscore + '0ms';

    document.getElementById("start").style.display = "block";
    document.getElementById("explanation").style.display = "block";
    document.getElementById("stopbutton").style.display = "none";
    document.getElementById("clock").style.display = "none";
    document.getElementById("boxes").style.display = "none";
    document.getElementById("box1").style.display = "none";
    document.getElementById("box2").style.display = "none";
    document.getElementById("box3").style.display = "none";
    document.getElementById("header").classList.remove("tapHeader");
    document.getElementById("header").classList.remove("waitHeader");
    document.body.classList.remove("tap");
    document.body.classList.remove("wait");
}