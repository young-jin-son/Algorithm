const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(path).toString().trim();
let answer = 0;
let stack = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] === '(') {
    stack++;
  } else {
    stack--;
    (input[i - 1] === '(') ? answer += stack : answer++;
  }
}
console.log(answer);