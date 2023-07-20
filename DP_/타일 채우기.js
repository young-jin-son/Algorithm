const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const n = +fs.readFileSync(path).toString().trim();

const sol = (n) => {
  if (n % 2) return 0;

  const dp = new Array({ length: n + 1 }, () => 0);
  dp[0] = 1;
  dp[2] = 3;
  for (let i = 4; i <= n; i += 2) {
    dp[i] = dp[i - 2] * 3;
    for (let j = 4; j <= i; j += 2) {
      dp[i] += dp[i - j] * 2;
    }
  }
  return dp[n];
}

console.log(sol(n));