const fs = require('fs');
const path = process.platform === 'linux' ? 'dev/stdin' : './test.txt';
const exp = fs.readFileSync(path).toString().trim();

const xIdx = exp.indexOf('x');
let answer = '';
if (xIdx >= 0) {
  answer = exp.slice(0, xIdx);
  if (!answer) {
    answer = '1';
  }
}
if (answer === '-') {
  answer = '-1';
}

console.log(+answer);