const jsonData = {
    "module": {
        "name": "Level-five",
        "questions": 20,
        "revision": "HUH"
    },
    "questions": [{
            "number": 1,
            "images": "images/banana.png",
            "answers": "banana",
            "hint": "Likner norske ordet"
        },
        {
            "number": 2,
            "images": "images/pie.png",
            "answers": "pie",
            "hint": "Mindre enn 4 bokstaver"
        },
        {
            "number": 3,
            "images": "images/salmon.png",
            "answers": "salmon",
            "hint": "Begynner på sal"
        },
        {
            "number": 4,
            "images": "images/cookies.png",
            "answers": "Cookies",
            "hint": "Ett ord"
        },
        {
            "number": 5,
            "images": "images/hotdogs.png",
            "answers": "hotdogs",
            "hint": "Begynner på coo"
        },
        {
            "number": 6,
            "images": "images/sink.png",
            "answers": "sink",
            "hint": "Rimer på flink"
        },
        {
            "number": 7,
            "images": "images/mug.png",
            "answers": "a mug",
            "hint": "2 ord, 4 bokstaver"
        },
        {
            "number": 8,
            "images": "images/freezer.png",
            "answers": "freezer",
            "hint": "Likner norske ordet"
        },
        {
            "number": 9,
            "images": "images/vegetablepeeler.png",
            "answers": "vegetable peeler",
            "hint": "Første ord er vegetable"
        },
        {
            "number": 10,
            "images": "images/strainer.png",
            "answers": "strainer",
            "hint": "Rain er i ordet"
        },
        {
            "number": 11,
            "images": "images/laptop.png",
            "answers": "laptop",
            "hint": "Begynner på lap'"
        },
        {
            "number": 12,
            "images": "images/ceilingfan.png",
            "answers": "ceiling fan",
            "hint": "Tak vifte på norsk"
        },
        {
            "number": 13,
            "images": "images/drone.png",
            "answers": "drone",
            "hint": "Likt som norsk"
        },
        {
            "number": 14,
            "images": "images/headphones.png",
            "answers": "headphones",
            "hint": "Hodetelefoner oversatt"
        },
        {
            "number": 15,
            "images": "images/amplifier.png",
            "answers": "amplifier",
            "hint": "Begynner på amp"
        },
        {
            "number": 16,
            "images": "images/caps.png",
            "answers": "caps",
            "hint": "Norsk-engelsk"
        },
        {
            "number": 17,
            "images": "images/shirt.png",
            "answers": "shirt",
            "hint": "5 bokstaver"
        },
        {
            "number": 18,
            "images": "images/pants.png",
            "answers": "pants",
            "hint": "Begynner på pan"
        },
        {
            "number": 19,
            "images": "images/sweater.png",
            "answers": "sweater",
            "hint": "Rimer på weather"
        },
        {
            "number": 20,
            "images": "images/jeans.png",
            "answers": "jeans",
            "hint": "Rimer på beans"
        }

    ]
}

var count = 0;
var frames1 = 0;
var frames2 = 0;
var frames3 = 0;
var progress = 0;
var redProgress = 0;
var cor = 0;
var wrong = 0;
const visHint = 'Show hint';

function hint() {
    count--;

    // Retrieve the question object at the index equal to the value of the count variable in the questions array in the jsonData object
    var question = jsonData.questions[count];
    var hint = question.hint;
    count++;

    // Set the inner HTML of the element with the ID "hint" to the value of the hint variable
    document.getElementById("hint").innerHTML = hint;
}

nextAnswers();


function answer() {
    // Decrement the count and retrieve the current question
    count--;
    var question = jsonData.questions[count];
    var correct = question.answers;
    let submit = document.getElementById("answerInput").value;
    let submitted = submit.toLowerCase();

    // Check if the answer is correct
    if (submitted == correct) {
        // If the answer is correct, update the progress bar and display a message
        document.getElementById("nextText").textContent = "Riktig";
        cor++;
        progressBar();
    } else {
        document.getElementById("nextText").textContent = "Wrong";
        wrong++;
        failProgressBar();
    }
    // Executes other functions to blur and go to the next question
    resultsButton();
    blur();
    count++;
    console.log(submitted);
    document.getElementById("answerInput").value = "";
}

// Get the answer input and nextAnswers button
const autoType = document.getElementById("answerInput");
const nextAnswerButton = document.getElementById("nextAnswers");

// Let's you submit your answer by pressing Enter
autoType.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        answer();
    }
});

// Set the text content of the element with the ID "nextAnswers" to "Resultater" if test is finished
function resultsButton() {
    if (count === 19) {
        document.getElementById("nextAnswers").textContent = "Results";
    }
}

function blur() {
    if (frames2 == 0) {
        frames2 = 1;
        var blurCSS = document.getElementById("blur");
        var blurAmount = 0;

        // Set the interval to call the frame function every 20ms
        var id = setInterval(frame, 20);

        function frame() {
            if (blurAmount >= 10) { // If the blur amount is greater than or equal to 10, stop calling the frame function and set frames2 to 0
                clearInterval(id);
                frames2 = 0;
            } else { // Otherwise, increase the blur amount and update the blur filter on the element
                blurAmount++;
                blurCSS.style.filter = "blur(" + blurAmount + "px)";
            }
        }
    }
    document.getElementById("next").style.display = "flex";
    document.getElementById("answers").style.display = "none";
}

// If the count is exactly 20, run the final function instead of moving on to the next question
function nextAnswers() {
    if (count === 20) {
        final();
    } else {
        next();
    }
}

function next() {
    // Get the image and answers from the jsonData
    var question = jsonData.questions[count];
    var image = question.images;
    var correct = question.answers;
    var hint = question.hint;

    // Increment the count
    count++;

    // Set the innerHTML of the answer elements to the corresponding answers
    document.getElementById("image").src = image;
    document.getElementById("hint").innerHTML = visHint;
    document.getElementById("blur").style.filter = "blur(0px)";
    document.getElementById("next").style.display = "none";
    document.getElementById("answers2").style.display = "flex";
    document.getElementById("answerInput").focus();
}

function final() {
    document.getElementById("blur").style.display = "none";
    document.getElementById("next").style.display = "none";
    document.getElementById("final").style.display = "flex";

    // Set the innerHTML of the element with the ID "results" to show the number of correct and wrong answers
    document.getElementById("results").innerHTML =
        "Du fikk \r\n" + "<span class='cor'>" + cor + "</span>" + " riktig svar\r\n" +
        "<span class='wrong'>" + wrong + "</span>" + " feil svar";
}

function progressBar() {
    progress += 5;
    if (progress >= 4) { // If the progress is greater than or equal to 1 question answered, remove the rounded corners from the progress bar
        document.getElementById("redStatus").style.borderRadius = "0px 0px 0px 0px";
    }
    if (frames1 == 0) {
        frames1 = 1;
        var status = document.getElementById("status");
        var statusText = document.getElementById("statusText");

        // Set the initial width of the progress bar to 10 less than the current progress
        var width = progress - 10;
        var id = setInterval(frame, 10);

        function frame() {
            if (width >= progress) { // If the width is greater than or equal to the current progress, stop calling the frame function and reset frames1 to 0
                clearInterval(id);
                frames1 = 0;
            } else { // Otherwise, increment the width and update the progress bar
                width++;
                status.style.width = width + "%";
            }
        }
    }
    // Update the status text to show the current progress of the quiz
    statusText.innerHTML = (progress + redProgress) / 5 + " / 20";
}

function failProgressBar() {
    redProgress += 5;
    if (progress >= 4) {
        document.getElementById("redStatus").style.borderRadius = "0px 0px 0px 0px";
    } else if (progress >= 1) {
        document.getElementById("redStatus").style.borderRadius = "0px 0px 0px 0px";
    }
    if (frames3 == 0) {
        frames3 = 1;
        var redStatus = document.getElementById("redStatus");
        var statusText = document.getElementById("statusText");
        var width = redProgress - 10;
        var id = setInterval(frame, 10);

        function frame() {
            if (width >= redProgress) {
                clearInterval(id);
                frames3 = 0;
            } else {
                width++;
                redStatus.style.width = width + "%";
            }
        }
    }
    statusText.innerHTML = (progress + redProgress) / 5 + " / 20";
}