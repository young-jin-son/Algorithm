const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, ...arr] = fs.readFileSync(path).toString().trim().split(/\s/g).map(Number);

const answer = [];
const set = Array.from(new Set([...arr])).sort((a, b) => a - b);
const obj = {};

set.forEach((v, i) => obj[v] = i);

for (let i = 0; i < n; i++) {
  answer.push(obj[arr[i]]);
}

console.log(answer.join(' '));
