const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n').map(BigInt);

let idx = 0;
const answer = [];

for (let i = 0; i < 3; i++) {
  const n = Number(input[idx]);
  const arr = input.slice(idx + 1, idx + n + 1);
  const sum = arr.reduce((a, b) => a + b, 0n);
  answer.push((sum === 0n) ? '0' : (sum > 0n) ? '+' : '-');
  idx += n + 1;
}

console.log(answer.join('\n'));