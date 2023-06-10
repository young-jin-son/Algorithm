const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, r, c] = fs.readFileSync(path).toString().trim().split(' ').map(Number);

let answer = 0;
const sol = (row, col, size) => {
  if (row === r && col === c) {
    console.log(answer);
    return;
  }
  if (r >= row && r < row + size && c >= col && c < col + size) {
    size = parseInt(size / 2);
    sol(row, col, size);
    sol(row, col + size, size);
    sol(row + size, col, size);
    sol(row + size, col + size, size);
  } else answer += size * size;
};

sol(0, 0, Math.pow(2, n));