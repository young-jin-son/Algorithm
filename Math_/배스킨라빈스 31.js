const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, ...input] = fs.readFileSync(path).toString().trim().split('\n');

let [num, cnt] = [0, 1000];

for (let i = 0; i < n; i++) {
  const [j, m] = input[i].split(' ').map(Number);
  const r = (j - 1) % (1 + m);
  const firstWinningNum = 1 + r;

  const winningNumsCnt = Math.ceil((j - firstWinningNum + 1) / (1 + m)) * 2;

  if (winningNumsCnt < cnt) {
    num = i + 1;
    cnt = winningNumsCnt;
  }
}

console.log(num, cnt);
