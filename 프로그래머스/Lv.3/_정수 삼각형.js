function solution(triangle) {
  const n = triangle.length;
  const dp = triangle[n - 1].slice();

  for (let depth = n - 2; depth >= 0; depth--) {
    for (let i = 0; i <= depth; i++) {
      dp[i] = triangle[depth][i] + Math.max(dp[i], dp[i + 1]);
    }
  }

  return dp[0];
}

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]])); // 30