const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, ...arr] = fs.readFileSync(path).toString().trim().split('\n');

let answer = 1;
for (let i = 0; i < n; i++) {
  const [x, y] = arr[i].split(' ').map(Number);
  if (answer === x) {
    answer = y;
  } else if (answer === y) {
    answer = x;
  }
}

console.log(answer);