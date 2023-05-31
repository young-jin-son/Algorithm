const fs = require('fs');
const filePath = (process.platform === 'linux') ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const numToppgins = +input[0];
const [doughPrice, toppingPrice] = input[1].split(' ').map(Number);
const doughCal = +input[2];
const toppings = input.slice(3).map(Number).sort((a, b) => b - a);

let cal = doughCal + toppings.reduce((a, b) => a + b, 0);
let price = doughPrice + toppingPrice * numToppgins;
let calPerWon = Math.floor(cal / price);

for (let i = numToppgins - 1; i >= 0; i--) {
  cal = doughCal + toppings.slice(0, i).reduce((a, b) => a + b, 0);
  price = doughPrice + toppingPrice * i;
  let newCalPerWon = Math.floor(cal / price);

  if (newCalPerWon > calPerWon) {
    calPerWon = newCalPerWon;
  }
}

console.log(calPerWon);