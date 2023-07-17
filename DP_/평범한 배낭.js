// 가치 합의 최댓값 출력
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const sol = (input) => {
  const [n, k] = input[0].split(' ').map(Number);
  const arr = input.slice(1).map(el => el.split(' ').map(Number));
  const dp = Array.from({ length: n + 1 }, () => Array.from({ length: k + 1 }));

  for (let i = 1; i <= n; i++) {
    const [w, v] = arr[i - 1];
    for (let j = 1; j <= k; j++) {
      // dp[i][j] = dp[i - 1][j];
      if (j - w >= 0) {

        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - w + v]);
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[n][k];
}

console.log(sol(input));
