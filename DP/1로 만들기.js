const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
let n = +fs.readFileSync(path).toString().trim();
const dp = [0, 0];

for (let i = 2; i <= n; i++) {
  dp[i] = dp[i - 1] + 1;
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }
}

console.log(dp.pop());