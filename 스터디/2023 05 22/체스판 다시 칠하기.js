// const input = '10 13\nBBBBBBBBWBWBW\nBBBBBBBBBWBWB\nBBBBBBBBWBWBW\nBBBBBBBBBWBWB\nBBBBBBBBWBWBW\nBBBBBBBBBWBWB\nBBBBBBBBWBWBW\nBBBBBBBBBWBWB\nWWWWWWWWWWBWB\nWWWWWWWWWWBWB'.split('\n');
// const input = '8 8\nBWBWBWBW\nWBWBWBWB\nBWBWBWBW\nWBWBWBWB\nBWBWBWBW\nWBWBWBWB\nBWBWBWBW\nWBWBWBWB'.split('\n');
// const input = '9 23\nBBBBBBBBBBBBBBBBBBBBBBB\nBBBBBBBBBBBBBBBBBBBBBBB\nBBBBBBBBBBBBBBBBBBBBBBB\nBBBBBBBBBBBBBBBBBBBBBBB\nBBBBBBBBBBBBBBBBBBBBBBB\nBBBBBBBBBBBBBBBBBBBBBBB\nBBBBBBBBBBBBBBBBBBBBBBB\nBBBBBBBBBBBBBBBBBBBBBBB\nBBBBBBBBBBBBBBBBBBBBBBW'.split('\n');

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const boardO = input.slice(1);
// 미리 답으로 나와야 하는 체스판을 만듦
const boardW = new Array(8).fill(0).map((v, i) => (i % 2) ? 'BWBWBWBW' : 'WBWBWBWB');
const boardB = new Array(8).fill(0).map((v, i) => (i % 2) ? 'WBWBWBWB' : 'BWBWBWBW');

let [min, countW, countB] = [64, 0, 0];

// 
for (let i = 0; i < n - 7; i++) {
  for (let j = 0; j < m - 7; j++) {
    [countW, countB] = [0, 0];

    for (let k = 0; k < 8; k++) {
      for (let l = 0; l < 8; l++) {
        // 흰색으로 시작하는 체스판을 만들 때 칠해야 하는 타일 수를 셈
        if (boardO[i + k][j + l] !== boardW[k][l]) {
          countW++;
        }
        // 검정색으로 시작하는 체스판을 만들 때 칠해야 하는 타일 수를 셈
        if (boardO[i + k][j + l] !== boardB[k][l]) {
          countB++;
        }
      }
    }
    min = Math.min(min, countW, countB);
  }
}

console.log(min);
