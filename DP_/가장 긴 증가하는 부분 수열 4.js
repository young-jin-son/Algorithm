const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, ...input] = fs.readFileSync(path).toString().trim().split(/\s/g).map(Number);

const dp = Array.from({ length: n }, () => 0);
const arr = [];

for (let i = 0; i < n; i++) {
  let max = 0;
  let maxIdx = -1;
  for (let j = 0; j < i; j++) {
    if (input[i] > input[j] && dp[j] > max) {
      max = dp[j];
      maxIdx = j;
    }
  }
  dp[i] = max + 1;
  arr[i] = maxIdx !== -1 ? arr[maxIdx].concat(input[i]) : [input[i]];
}

const maxLen = Math.max(...dp);
console.log(maxLen);
console.log(arr[dp.indexOf(maxLen)].join(' '));