// const input = ['6 8 10', '25 60 52', '5 12 13', '0 0 0'].slice(0, -1).map(el => el.split(' ').map(Number).sort((a, b) => a - b));
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(0, -1).map(el => el.split(' ').map(Number).sort((a, b) => a - b));
let answer = '';
for (el of input) {
  answer += (el[0] ** 2 + el[1] ** 2 === el[2] ** 2) ? 'right\n' : 'wrong\n';
}

console.log(answer);

