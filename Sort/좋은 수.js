const input = ['10', '19 20 17 18 15 16 13 14 11 12', '5'];

const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(v => Number(v));
let s = Number(input[2]);

for (let i = 0; i < n - 1; i++) {
  if (!s) {
    break;
  }
  if (arr[i] < arr[i + 1]) {
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    s--;
  }
}
console.log(arr.join(' '));

// 통과 못함
