class Formula1 {
  constructor(pilot, marca) {
    this.pilot = pilot;
    this.marca = marca;
  }

  run() {
    return `O piloto ${this.pilot} da ${this.marca} está na pista!`;
  }
}

const formula1 = new Formula1("Max Verstappen", "Red Bull");
console.log(formula1.run());
