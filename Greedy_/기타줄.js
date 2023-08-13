const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
let [n, m] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(el => el.split(' ').map(Number));
let answer = 0;
const setMin = Math.min(...arr.map(el => el[0]));
const setMinAvg = setMin / 6;
const individualMin = Math.min(...arr.map(el => el[1]));

if (setMinAvg < individualMin) {
  answer += Math.floor(n / 6) * setMin;
  n -= Math.floor(n / 6) * 6;
}
answer += Math.min(setMin, individualMin * n);
console.log(answer);