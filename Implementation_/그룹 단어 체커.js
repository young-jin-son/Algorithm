const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, ...arr] = fs.readFileSync(path).toString().trim().split('\n');
let answer = 0;
for (const str of arr) {
  const check = [];
  let flag = true;
  for (const char of str) {
    if (!check.includes(char) || check[check.length - 1] === char) {
      check.push(char);
    } else {
      flag = false;
    }
  }
  if (flag) {
    answer += 1;
  }
}
console.log(answer);