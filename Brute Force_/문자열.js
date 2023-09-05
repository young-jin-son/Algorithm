const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [a, b] = fs.readFileSync(path).toString().trim().split(' ');
let answer = a.length;

for (let i = 0; i <= b.length - a.length; i++) {
  let tmp = 0;
  for (let j = i; j < i + a.length; j++) {
    if (a[j - i] !== b[j]) tmp++;
  }
  if (tmp < answer) answer = tmp;
}

console.log(answer);