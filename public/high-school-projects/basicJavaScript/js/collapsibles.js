var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "flex") {
      content.style.display = "none";
    } else {
      content.style.display = "flex";
    }
  });
}

document.getElementById('arealCalculator').addEventListener('submit', function (e) {
  e.preventDefault();
  const lengde = document.getElementById('lengde').value;
  const bredde = document.getElementById('bredde').value;

  document.getElementById('calculatorOutput').innerHTML = lengde * bredde + "cm i annen";
});
document.getElementById('triangleCalculator').addEventListener('submit', function (e) {
  e.preventDefault();
  const lengden = document.getElementById('lengden').value;
  const bredden = document.getElementById('bredden').value;
  document.getElementById('triangleOutput').innerHTML = (lengden * bredden) / 2 + "cm i annen";
});

function checkNationality() {
  var input = document.getElementById("inputField").value;
  var output = document.getElementById("nasjonalitetOutput");

  if (input === "n") {
    output.innerHTML = "Du er norsk.";
  } else if (input === "s") {
    output.innerHTML = "Du er svensk.";
  } else {
    output.innerHTML = "Ugyldig nasjonalitet. Skriv inn 'n' for norsk eller 's' for svensk.";
  }
}

function startGame() {
  // Get the secret number from the input element
  let min = 1;
  let max = 100;
  let secretNumber = parseInt(document.getElementById("secretInput").value);

  while (secretNumber < min || secretNumber > max || isNaN(secretNumber)) {
    secretNumber = parseInt(prompt("Ugyldig svar. Vennligst velg et nummer mellom " + min + " og " + max + ":"));
  }

  // Start guessing
  let guess;
  let attempts = 1;
  let guesses = [];
  guess = Math.floor((max + min) / 2);
  guesses.push(guess);

  while (guess !== secretNumber) {
    if (guess > secretNumber) {
      max = guess - 1;
    } else {
      min = guess + 1;
    }
    guess = Math.floor((max + min) / 2);
    guesses.push(guess);
    attempts++;
  }

  // Vise resultatet på siden
  document.getElementById("guesses").innerHTML = guesses;
  document.getElementById("secretNumber").innerHTML = secretNumber;
  document.getElementById("attempts").innerHTML = attempts;
  document.getElementById("result").innerHTML = "Maskinen gjettet nummeret ditt på " + attempts + " forsøk";
}



var test = 8;
var testVerdi = 'testverdi';
var produkt = 2 * 3;
var broek = 2 / 3;
var rektangel = 8 * 8;
var trekant = 8 * 6 / 2

console.log(test)
console.log(testVerdi)
console.log(produkt)
console.log(broek)
console.log(rektangel)
console.log(trekant)