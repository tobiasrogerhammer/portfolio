class DinAlder {
  constructor(navn, fodselsar) {
    this.navn = navn;
    this.fodselsar = fodselsar;
  }
  calculateAge() {
    if (this.fodselsar > 2023) {
      return 'Du er ikke født enda';
    }
    const currentYear = new Date().getFullYear();
    return currentYear - this.fodselsar;
  }
  under() {
    const age = this.calculateAge();
    return age <= 15;
  }
  mellom() {
    const age = this.calculateAge();
    return age >= 15 && age <= 18;
  }
  over() {
    const age = this.calculateAge();
    return age >= 18;
  }
}

document.getElementById('calculatorInput').addEventListener('submit', function (e) {
  e.preventDefault();
  const fname = document.getElementById('fname').value;
  const fodselsar = document.getElementById('fodselsar').value;
  const nyAlder = new DinAlder(fname, fodselsar);
  const age = nyAlder.calculateAge();

  document.getElementById("calculatorInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        answer();
    }
});

  let message = '';
  if (nyAlder.mellom()) {
    message = fname + ' er eldre enn den kriminelle lavalder';
  }
  if (nyAlder.under()) {
    message = fname + ' er yngre enn den kriminelle lavalder';
  }
  if (nyAlder.over()) {
    message = fname + ' er over enn den kriminelle lavalder og du har stemmerett';
  }

  document.getElementById("personAge").style.display = "flex";
  document.getElementById("message").style.display = "flex";
  document.getElementById('personAge').innerHTML = fname + " er " + age + " år gammel";
  document.getElementById('message').innerHTML = message;
});
