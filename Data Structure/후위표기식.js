const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const medianExp = fs.readFileSync(path).toString().trim();
const stack = [];
const answer = [];
for (const s of medianExp) {
  switch (s) {
    case '(':
      stack.push(s);
      break;
    case ')':
      break;
  }
}