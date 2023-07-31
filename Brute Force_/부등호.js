const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
const n = +input[0];
const arr = input[1].split(' ');

let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;

const bf = (numStr, cnt) => {
  if (cnt == n) {
    max = Math.max(max, +numStr);
    min = Math.min(min, +numStr);
    return;
  }

  if (arr[cnt] == '>') {
    for (let i = 0; i < 10; i++) {
      if (!numStr.includes(i) && numStr[cnt] > i) {
        bf(numStr + i, cnt + 1)
      }
    }
  } else {
    for (let i = 0; i < 10; i++) {
      if (!numStr.includes(i) && numStr[cnt] < i) {
        bf(numStr + i, cnt + 1)
      }
    }
  }
}

for (let i = 0; i < 10; i++) {
  bf(String(i), 0);
}

max = max.toString().padStart(n + 1, '0');
min = min.toString().padStart(n + 1, '0');

console.log(`${max}\n${min}`);

