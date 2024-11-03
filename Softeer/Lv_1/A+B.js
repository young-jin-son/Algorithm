const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let sum = [];
const array = [];

// input
rl.on('line', input => {
  sum = input.split(' ').map(el => +el).reduce((acc, cur) => acc + cur, 0)
  // array = [...array, sum]
  array.push(sum)
})

// output
rl.on('close', () => {
  for (let i = 1; i < array.length; i++) {
    console.log(`Case #${i}: ${array[i]}`)
  }

  process.exit();
})
