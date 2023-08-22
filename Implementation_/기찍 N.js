const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const n = +fs.readFileSync(path).toString().trim();
const answer = [];
for (let i = n; i > 0; i--) {
  answer.push(i);
}
console.log(answer.join('\n'));