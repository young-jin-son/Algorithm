
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b);

if (n === 1) {
  console.log(arr[0] ** 2);
} else {
  console.log(arr[0] * arr[n - 1]);
}
