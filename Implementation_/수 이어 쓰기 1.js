const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const n = +fs.readFileSync(path).toString().trim();

let answer = 0;
let d = 10
let s = 1;
for (let i = 1; i <= n; i++) {
  if (Math.floor(i / d) === 0) {
    answer += s;
  } else {
    i--;
    d *= 10;
    s++;
  }
}

console.log(answer);