const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
const n = +input[0];
const arr = input[1].split(' ').map(Number);
const [b, c] = input[2].split(' ').map(Number);
let answer = 0;

for (let i = 0; i < n; i++) {
  arr[i] -= b;
  answer++;
  answer += Math.ceil(arr[i] / c);
}

console.log(answer);