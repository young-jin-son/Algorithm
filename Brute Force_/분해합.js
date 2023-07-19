const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const n = +fs.readFileSync(path).toString().trim();

let tmp = n - (String(n)).length * 9;
let answer = 0;
if (tmp < 0) tmp = 0;
for (let i = tmp; i < n; i++) {
  if (String(i).split('').map(Number).reduce((a, b) => a + b, 0) + i === n) {
    answer = i;
    break;
  }
}
console.log(answer);