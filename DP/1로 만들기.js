const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
let n = +fs.readFileSync(path).toString().trim();
const dp = [0, 0];

let i = 2;
while (i <= n) {
  dp[i] = dp[i - 1] + 1;
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }
  i++;
}

console.log(dp[n]);