const DIVIDER = 1_000_000_007;

function solution(n, money) {
  const dp = Array(n + 1).fill(0);
  dp[0] = 1;

  for (const coin of money) {
    for (let j = coin; j <= n; j++) {
      dp[j] += dp[j - coin] % DIVIDER;
    }
  }

  return dp[n];
}