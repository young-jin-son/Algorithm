const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(path).toString().trim().split(/\s/g);
const n = +input[0];
const m = +input[1];
const arr = input.slice(2).map(Number);
const setPrice = [];
const piecePrice = [];

for (let i = 0; i < m; i++) {
  setPrice.push(arr[2 * i]);
  piecePrice.push(arr[2 * i + 1]);
}

const setMin = setPrice.reduce((acc, v) => acc < v ? acc : v, 1000);
const pieceMin = piecePrice.reduce((acc, v) => acc < v ? acc : v, 1000);
const setCnt = Math.floor(n / 6);
const pieceCnt = n - 6 * setCnt;
let cost = 0;

if (setMin / 6 < pieceMin) {
  cost = setCnt * setMin + (pieceCnt * pieceMin < setMin ? pieceCnt * pieceMin : setMin);
} else {
  cost = n * pieceMin;
}

console.log(cost);