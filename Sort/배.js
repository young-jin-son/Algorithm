// const input = ['4', '23 32 25 28', '10', '5 27 10 16 24 20 2 32 18 7'];

// const { time } = require('console');
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
let weightLimit = input[1].split(' ').map(v => Number(v)).sort((a, b) => b - a);
const m = Number(input[2]);
const boxWeights = input[3].split(' ').map(v => Number(v)).sort((a, b) => b - a);
let answer = 0;

if (weightLimit[0] < boxWeights[0]) {
  console.log(-1);
  return;
}

while (boxWeights.length) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (weightLimit[i] >= boxWeights[j]) {
        boxWeights.splice(j, 1);
        break;
      }
    }
  }
  answer++;
}

console.log(answer);
