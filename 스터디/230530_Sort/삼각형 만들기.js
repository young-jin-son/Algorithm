// const input = ['3', '1', '3', '2'].map(Number);
// const input = ['3', '1', '2', '2'].map(Number);
// const input = ['6', '2', '3', '2', '3', '2', '4'].map(Number);
// const input = ['5', '4', '5', '6', '7', '20'].map(Number);

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const n = input.shift();
const sides = input.sort((a, b) => a - b);
let answer = -1;

for (let i = 0; i < n - 2; i++) {
  if (sides[i] + sides[i + 1] > sides[i + 2]) {
    answer = sides[i] + sides[i + 1] + sides[i + 2];
  }
}

console.log(answer);
