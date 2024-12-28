function solution(board) {
  let answer = 0;
  const [N, M] = [board.length, board[0].length];
  const dp = Array.from({ length: N }, () => Array.from({ length: M }, () => 0));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === 1) {
        let x = i ? dp[i - 1][j] : 0;
        let y = i && j ? dp[i - 1][j - 1] : 0;
        let z = j ? dp[i][j - 1] : 0;

        dp[i][j] = 1;
        if (x && y && z) dp[i][j] += Math.min(x, y, z);

        answer = Math.max(answer, dp[i][j]);
      }
    }
  }

  return answer ** 2;
}