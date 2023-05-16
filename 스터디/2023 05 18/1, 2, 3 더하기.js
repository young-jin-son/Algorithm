const [n, ...arr] = ['3', '4', '7', '10'].map(Number);
const fs = require('fs');
// const [n, ...arr] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let answer = '';
const count = [1, 2, 4];
for (let i = 3; i < 10; i++) {
  count.push(count[i - 1] + count[i - 2] + count[i - 3]);
}
console.log(count);

for (v of arr) {
  answer += count[v - 1] + '\n';
}

console.log(answer);
