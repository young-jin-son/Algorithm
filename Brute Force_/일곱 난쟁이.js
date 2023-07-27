const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const arr = fs.readFileSync(path).toString().trim().split('\n').map(Number);
const sum = arr.reduce((a, b) => a + b, 0);
let answer = [];

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (sum === arr[i] + arr[j] + 100) {
      answer = arr.filter((v => v !== arr[i] && v !== arr[j]));
      break;
    }
  }
}

console.log(answer.sort((a, b) => a - b).join('\n'));