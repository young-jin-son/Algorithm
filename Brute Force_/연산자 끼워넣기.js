const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
const n = +input[0];
const arr = input[1].split(' ').map(Number);
const op = input[2].split(' ').map(Number); // 덧셈, 뺄셈, 곱셈, 나눗셈
let max = -1_000_000_000;
let min = 1_000_000_000;

const calculate = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
  (a, b) => ~~(a / b)
];

const dfs = (count = 0, result = arr[0]) => {
  if (count === n - 1) {
    max = Math.max(max, result);
    min = Math.min(min, result);
  } else {
    for (let i = 0; i < 4; i++) {
      if (!op[i]) {
        continue;
      }
      op[i]--;
      dfs(count + 1, calculate[i](result, arr[count + 1]));
      op[i]++;
    }
  }
};

dfs();
console.log(max);
console.log(min);