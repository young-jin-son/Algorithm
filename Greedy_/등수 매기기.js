const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, ...arr] = fs.readFileSync(path).toString().trim().split('\n').map(Number);
const sorted = arr.sort((a, b) => a - b);
let answer = 0;
for (let i = 0; i < n; i++) {
  if (sorted[i] !== i + 1) {
    answer += Math.abs(sorted[i] - (i + 1));
  }
}
console.log(answer);
