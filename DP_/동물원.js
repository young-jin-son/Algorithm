const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const n = +fs.readFileSync(path).toString().trim();
const mod = 9901;
const dp = [1, 3];

for (let i = 1; i <= n; i++) {
  dp.push((dp[i] * 2 + dp[i - 1]) % mod);
}

console.log(dp[n]);