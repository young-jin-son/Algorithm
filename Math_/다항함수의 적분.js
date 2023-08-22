const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const exp = fs.readFileSync(path).toString().trim();
const xIdx = exp.indexOf('x');
let answer = '';
if (xIdx < 0) {
  if (exp === '1') {
    answer += 'x';
  } else if (exp === '-1') {
    answer += '-x';
  } else if (exp !== '0') {
    answer += exp + 'x';
  }
} else {
  answer += +(exp.slice(0, xIdx)) / 2;
  if (answer === '1' || answer === '-1') {
    answer = answer.slice(0, -1);
  }
  answer += 'xx';
  if (exp.slice(xIdx + 1) === '+1') {
    answer += '+x';
  } else if (exp.slice(xIdx + 1) === '-1') {
    answer += '-x';
  } else if (exp.slice(xIdx + 1)) {
    answer += exp.slice(xIdx + 1) + 'x';
  }
}

answer += answer ? '+W' : 'W';

console.log(answer);