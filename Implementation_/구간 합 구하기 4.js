const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);
const arr = input.shift().split(' ').map(Number);
const sum = [0];
for (let i = 0; i < n; i++) {
  sum[i + 1] = sum[i] + arr[i];
}

const answer = [];
for (let i = 0; i < m; i++) {
  const [left, right] = input[i].split(' ').map(Number);
  answer.push(sum[right] - sum[left - 1]);
}
console.log(answer.join('\n'));