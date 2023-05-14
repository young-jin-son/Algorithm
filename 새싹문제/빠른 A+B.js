const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [n, ...arr] = input;
n = Number(n);
arr = arr.map(el => el.split(' ').map(v => Number(v)));
let answer = '';
for (let i = 0; i < n; i++) {
  answer += arr[i][0] + arr[i][1] + '\n';
}

console.log(answer);