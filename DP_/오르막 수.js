const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const n = +fs.readFileSync(path).toString().trim();
const mod = 10007;
const dp = Array.from({ length: 10 }, () => 1);

for (let i = 1; i < n; i++) {
  for (let j = 8; j >= 0; j--) {
    dp[j] = (dp[j + 1] + dp[j]) % mod;
  }
}

console.log(dp.reduce((a, b) => a + b, 0) % mod);

