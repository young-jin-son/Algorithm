const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const n = +fs.readFileSync(path).toString().trim();
let answer = 0;
for (let i = 1; i <= n; i++) {
  let sum = i;
  for (let j = i + 1; j <= n; j++) {
    if (sum === n) {
      answer++;
      break;
    } else if (sum > n) {
      break;
    } else {
      sum += j;
    }
  }
}
console.log(answer + 1);