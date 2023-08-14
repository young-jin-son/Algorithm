const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
let [n, m, k] = fs.readFileSync(path).toString().trim().split(' ').map(Number);
let answer = 0;
while (1) {
  if (n < 2 || m < 1 || n + m - 3 < k) {
    break;
  }
  n -= 2;
  m -= 1;
  answer += 1;
}

console.log(answer);