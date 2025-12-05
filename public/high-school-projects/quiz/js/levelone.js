const jsonData = {
    // JSON data object containing information about the quiz module and questions
    "module": {
        "name": "Level-one",
        "questions": 10,
        "revision": "HUH"
    },
    "questions": [{
            "number": 1,
            "images": "images/banana.png",
            "answers": [
                "Banana",
                "Apple",
                "Strawberry",
                "Blueberry"
            ],
            "correct_answer": 0,
            "hint": "Likner norske ordet"
        },
        {
            "number": 2,
            "images": "images/waffle.png",
            "answers": [
                "Pancake",
                "Waffle",
                "Scones",
                "Nuggets"
            ],
            "correct_answer": 1,
            "hint": "Likner norske ordet"
        },
        {
            "number": 3,
            "images": "images/pie.png",
            "answers": [
                "Taco",
                "Steak",
                "Pie",
                "Mac'N Cheese"
            ],
            "correct_answer": 2,
            "hint": "Mindre enn 4 bokstaver"
        },
        {
            "number": 4,
            "images": "images/ceasarsalad.png",
            "answers": [
                "Corn Flakes",
                "Mushrooms",
                "Ceasar Salad",
                "Yoghurt"
            ],
            "correct_answer": 2,
            "hint": "En type salat"
        },
        {
            "number": 5,
            "images": "images/salmon.png",
            "answers": [
                "Tater Tots",
                "Bread",
                "Fajitas",
                "Salmon"
            ],
            "correct_answer": 3,
            "hint": "Ikke bread"
        },
        {
            "number": 6,
            "images": "images/smores.png",
            "answers": [
                "P&J Sandwich",
                "Enchiladas",
                "Smores",
                "Chicken wings"
            ],
            "correct_answer": 2,
            "hint": "Ett ord"
        },
        {
            "number": 7,
            "images": "images/cookies.png",
            "answers": [
                "Lasagne",
                "BBQ Ribs",
                "Apple Pie",
                "Cookies"
            ],
            "correct_answer": 3,
            "hint": "Ett ord"
        },
        {
            "number": 8,
            "images": "images/stroganof.png",
            "answers": [
                "Beef Stroganof",
                "Spagetthi and Meatballs",
                "Chicken and Rice",
                "Pizza"
            ],
            "correct_answer": 0,
            "hint": "Mer enn et ord"
        },
        {
            "number": 9,
            "images": "images/hotdogs.png",
            "answers": [
                "Nachos",
                "Hotdogs",
                "Cheese Burger",
                "Turkey"
            ],
            "correct_answer": 1,
            "hint": "Et ord"
        },
        {
            "number": 10,
            "images": "images/burritos.png",
            "answers": [
                "Spaghetti",
                "Fried chicken",
                "Beef stir fry",
                "Burritos"
            ],
            "correct_answer": 3,
            "hint": "Ikke spaghetti"
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

function answer(answer) {
    // Decrement the count and retrieve the current question
    count--;
    var question = jsonData.questions[count];
    var correct = question.correct_answer;

    // Check if the answer is correct
    if (answer === correct) {
        // If the answer is correct, update the progress bar and display a message
        resultsButton();
        document.getElementById("nextText").textContent = "Correct";
        count++;
        cor++;
        progressBar();
        blur();

        // Return to exit the function
        return;
    }

    // If the answer is incorrect, update the progress bar and display a message
    resultsButton();
    document.getElementById("nextText").textContent = "Wrong";
    count++;
    wrong++;
    failProgressBar();
    blur();
}

// Set the text content of the element with the ID "nextAnswers" to "Results" if test is finished
function resultsButton() {
    if (count === 9) {
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

// If the count is exactly 10, run the final function instead of moving on to the next question
function nextAnswers() {
    if (count === 10) {
        final();
    } else {
        next();
    }
}

function next() {
    // Get the question and answers from the jsonData
    var question = jsonData.questions[count];
    var image = question.images;
    var correct = question.correct_answer;
    var answers = question.answers;
    const visHint = 'Show hint';
    var hint = question.hint;

    // Increment the count
    count++;

    // Set the innerHTML of the answer elements to the corresponding answers
    document.getElementById("answer1").innerHTML = answers[0];
    document.getElementById("answer2").innerHTML = answers[1];
    document.getElementById("answer3").innerHTML = answers[2];
    document.getElementById("answer4").innerHTML = answers[3];

    document.getElementById("image").src = image;
    document.getElementById("hint").innerHTML = visHint;
    document.getElementById("blur").style.filter = "blur(0px)";
    document.getElementById("next").style.display = "none";
    document.getElementById("answers").style.display = "flex";
}

function final() {
    document.getElementById("blur").style.display = "none";
    document.getElementById("next").style.display = "none";
    document.getElementById("final").style.display = "flex";

    // Set the innerHTML of the element with the ID "results" to show the number of correct and wrong answers
    document.getElementById("results").innerHTML =
        "Du fikk \r\n" + "<span class='cor'>" + cor + "</span>" + " Correct answers\r\n" +
        "<span class='wrong'>" + wrong + "</span>" + " Wrong answers";
}

function progressBar() {
    progress += 10;
    if (progress >= 9) { // If the progress is greater than or equal to 1 question answered, remove the rounded corners from the progress bar
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
    statusText.innerHTML = (progress + redProgress) / 10 + " / 10";
}

function failProgressBar() {
    redProgress += 10;
    if (progress >= 9) {
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
    statusText.innerHTML = (progress + redProgress) / 10 + " / 10";
}