const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n').map(el => el.split(''));

const sol = (board) => {
  let answer = 0;
  for (let i = 0; i < 8; i++) {
    if (i % 2) {
      for (let j = 1; j < 8; j += 2) {
        if (board[i][j] === 'F') answer++;
      }
    } else {
      for (let j = 0; j < 8; j += 2) {
        if (board[i][j] === 'F') answer++;
      }
    }
  }
  return answer;
}

console.log(sol(input));