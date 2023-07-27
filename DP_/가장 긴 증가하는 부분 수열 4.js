const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, ...input] = fs.readFileSync(path).toString().trim().split(/\s/g).map(Number);

const dp = Array.from({ length: n }, () => 0);
const arr = [];

for (let i = 0; i < n; i++) {
  let max = 0;
  let maxIdx = -1;
  for (let j = 0; j < i; j++) {
    // 증가하고, max보다 dp[j]가 크다면 
    // => dp[j]가 현재 i번째 값이 들어갈 수 있는 부분 수열 중 최대 값이라는 뜻
    if (input[i] > input[j] && dp[j] > max) {
      max = dp[j];
      maxIdx = j;
    }
  }
  dp[i] = max + 1; // max가 0 그대로여도, 들어갈 수 있는 최대값이 되었어도 + 1
  arr[i] = maxIdx !== -1 ? arr[maxIdx].concat(input[i]) : [input[i]];
}

const maxLen = Math.max(...dp);
console.log(maxLen);
console.log(arr[dp.indexOf(maxLen)].join(' '));