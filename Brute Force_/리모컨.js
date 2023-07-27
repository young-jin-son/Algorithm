const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, m, ...arr] = fs.readFileSync(path).toString().trim().split(/\s/g).map(Number);

let answer = Math.abs(100 - n);

for (let i = 0; i < 1_000_000; i++) {
  let isValid = true;
  for (const char of String(i)) {
    if (arr.includes(+char)) {
      isValid = false;
      break;
    }
  }
  if (isValid) {
    answer = Math.min(answer, Math.abs(i - n) + String(i).length);
  }
}

console.log(answer);