const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [a, b] = fs.readFileSync(path).toString().trim().split(' ').map(Number);
const arr = [];
for (let i = 1; arr.length < b; i++) {
  for (let j = 1; j <= i && arr.length < b; j++) {
    arr.push(i);
  }
}

const answer = arr.slice(a - 1, b).reduce((cur, acc) => cur + acc, 0);
console.log(answer);
