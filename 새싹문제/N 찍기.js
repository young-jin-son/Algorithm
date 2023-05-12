const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin').toString());
let answer = ''
for (let i = 1; i <= n; i++) {
  answer += i + '\n';
}
console.log(answer);