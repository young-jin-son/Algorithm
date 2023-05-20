// const input = '8 8\nWBWBWBWB\nBWBWBWBW\nWBWBWBWB\nBWBBBWBW\nWBWBWBWB\nBWBWBWBW\nWBWBWBWB\nBWBWBWBW'.split('\n');
const input = '10 13\nBBBBBBBBWBWBW\nBBBBBBBBBWBWB\nBBBBBBBBWBWBW\nBBBBBBBBBWBWB\nBBBBBBBBWBWBW\nBBBBBBBBBWBWB\nBBBBBBBBWBWBW\nBBBBBBBBBWBWB\nWWWWWWWWWWBWB\nWWWWWWWWWWBWB'.split('\n');

const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const boardO = input.slice(1).map(el => el.split(''));
const boardW = new Array(8).fill(0).map((v, i) => (i % 2) ? 'BWBWBWBW' : 'WBWBWBWB').map(el => el.split(''));
const boardB = new Array(8).fill(0).map((v, i) => (i % 2) ? 'WBWBWBWB' : 'BWBWBWBW').map(el => el.split(''));
let countW = 0;

const idxW = [];
const idxB = [];
// console.log(boardW);
console.log(boardO);

// white board 기준 다른 index 찾기
for (let i = 0; i <= n; i++) {
  for (let j = 0; j <= m; j++) {
    for (let k = 0; k < 8; k++) {

      console.log(boardO[i][j]);
      console.log(boardW[i][j]);
      if (boardO[i][j] !== boardW[i][j]) {
        idxW.push([i, j]);
      }

      if (boardO[i][j] !== boardB[i][j]) {
        idxB.push[i, j];
      }
    }
  }
  // if ()
}

console.log(idxW);
console.log(idxB);
//black board 기준 다른 index 찾기



